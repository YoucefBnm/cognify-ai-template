"use client";
import React from "react";

// Full-screen quad positions (module-level constant to avoid re-allocation)
const QUAD_POSITIONS = new Float32Array([
  -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
]);

// Vertex Shader (GLSL 300 ES)
const vertexShaderSource = `#version 300 es
in vec4 a_position;
out vec2 v_uv;

void main() {
  // Pass normalized UV coordinates (0.0 to 1.0)
  v_uv = a_position.xy * 0.5 + 0.5;
  gl_Position = a_position;
}
`;

// Fragment Shader (GLSL 300 ES) — colors are now uniforms
const fragmentShaderSource = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;

// Bayer matrix for ordered dithering (4x4)
const mat4 bayer = mat4(
  0.0/64.0,  32.0/64.0, 8.0/64.0,  40.0/64.0,
  48.0/64.0, 16.0/64.0, 56.0/64.0, 24.0/64.0,
  12.0/64.0, 44.0/64.0, 4.0/64.0,  36.0/64.0,
  60.0/64.0, 28.0/64.0, 52.0/64.0, 20.0/64.0
);

// Simple hash function for noise
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

// Smooth noise function
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  // Smooth interpolation
  f = f * f * (3.0 - 2.0 * f);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Bayer dithering function
float bayerDither(vec2 fragCoord) {
  int x = int(mod(fragCoord.x, 4.0));
  int y = int(mod(fragCoord.y, 4.0));
  return bayer[x][y];
}

void main() {
  vec2 uv = v_uv;
  vec2 fragCoord = uv * u_resolution;

  // Create flowing animated gradient with wave-like motion
  float timeShift = u_time * 0.25;

  // Multiple overlapping wave patterns for organic movement
  float wave1 = sin(uv.x * 3.0 + timeShift) * cos(uv.y * 2.0 + timeShift * 0.8);
  float wave2 = sin(uv.y * 2.5 - timeShift * 0.6) * cos(uv.x * 3.5 - timeShift);
  float wave3 = sin((uv.x + uv.y) * 2.0 + timeShift * 1.2);

  // Combine waves for complex motion
  float wavePattern = (wave1 + wave2 + wave3) * 0.15;

  // Animated diagonal gradient
  vec2 gradientDir = vec2(
    cos(timeShift * 0.4) * 0.8 + sin(timeShift * 0.3) * 0.5,
    sin(timeShift * 0.4) * 0.8 + cos(timeShift * 0.3) * 0.5
  );

  float gradientValue = dot(uv - 0.5, gradientDir) + 0.5;

  // Add pulsing radial component
  float radial = length(uv - vec2(0.5 + sin(timeShift * 0.3) * 0.2, 0.5 + cos(timeShift * 0.4) * 0.2));
  radial = radial * (0.8 + sin(timeShift * 0.5) * 0.3);

  gradientValue = mix(gradientValue, radial, 0.4);

  // Apply wave distortion for flowing movement
  gradientValue += wavePattern;

  // Add larger flowing animation
  gradientValue += sin(u_time * 0.2 + uv.x * 2.0) * 0.15;
  gradientValue += cos(u_time * 0.15 + uv.y * 2.5) * 0.15;

  // Clamp to valid range
  gradientValue = clamp(gradientValue, 0.0, 1.0);

  // Use smoothstep for ultra-smooth color transitions
  float t1 = smoothstep(0.0, 0.5, gradientValue);
  vec3 blend1 = mix(u_color1, u_color2, t1);

  float t2 = smoothstep(0.3, 1.0, gradientValue);
  vec3 finalColor = mix(blend1, u_color3, t2);

  // Add subtle noise overlay (very light grain)
  float noiseValue = noise(uv * 200.0 + u_time * 0.05) * 0.015;
  finalColor += noiseValue;

  // Apply Bayer dithering to prevent banding
  float ditherValue = bayerDither(fragCoord) - 0.5;
  finalColor += ditherValue * 0.004;

  // HDR-like expansion (subtle boost to prevent clamping)
  finalColor = pow(finalColor, vec3(0.95));

  fragColor = vec4(finalColor, 1.0);
}
`;

// ---------- Helpers ----------

/** Convert a hex color string (e.g. "#8C59D9") to a normalized [r, g, b] tuple. */
function hexToVec3(hex: string): [number, number, number] {
  const cleaned = hex.replace("#", "");
  const r = parseInt(cleaned.slice(0, 2), 16) / 255;
  const g = parseInt(cleaned.slice(2, 4), 16) / 255;
  const b = parseInt(cleaned.slice(4, 6), 16) / 255;
  return [r, g, b];
}

// ---------- Default colors (matching the original hardcoded values) ----------
const DEFAULT_COLORS: [string, string, string] = [
  "#8C59D9", // Soft purple  — vec3(0.55, 0.35, 0.85)
  "#D973A6", // Soft pink    — vec3(0.85, 0.45, 0.65)
  "#73A6F2", // Soft blue    — vec3(0.45, 0.65, 0.95)
];

// ---------- Component ----------

interface ShaderGradientProps {
  /** Three hex color strings for the gradient palette. */
  colors?: [string, string, string];
  /** Whether the gradient should animate. @default false */
  animate?: boolean;
  /** Additional CSS classes forwarded to the canvas element. */
  className?: string;
}

export function GradientShader({
  colors = DEFAULT_COLORS,
  animate = false,
  className,
}: ShaderGradientProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ----- Compile shader helper -----
    const compileShader = (
      gl: WebGL2RenderingContext,
      type: number,
      source: string,
    ): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    // ----- Create program helper -----
    const createProgram = (
      gl: WebGL2RenderingContext,
      vertexShader: WebGLShader,
      fragmentShader: WebGLShader,
    ): WebGLProgram | null => {
      const program = gl.createProgram();
      if (!program) return null;

      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program linking error:", gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }

      return program;
    };

    // ----- Get WebGL 2 context -----
    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: true,
      powerPreference: "high-performance",
    });

    if (!gl) {
      console.error("WebGL 2 not supported");
      return;
    }

    // ----- Compile & link -----
    const vertexShader = compileShader(
      gl,
      gl.VERTEX_SHADER,
      vertexShaderSource,
    );
    const fragmentShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource,
    );
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    gl.useProgram(program);

    // ----- Full-screen quad geometry -----
    const positionAttributeLocation = gl.getAttribLocation(
      program,
      "a_position",
    );
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, QUAD_POSITIONS, gl.STATIC_DRAW);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    // ----- Uniform locations -----
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const color1Location = gl.getUniformLocation(program, "u_color1");
    const color2Location = gl.getUniformLocation(program, "u_color2");
    const color3Location = gl.getUniformLocation(program, "u_color3");

    // ----- Upload color uniforms -----
    const [c1, c2, c3] = [
      hexToVec3(colors[0]),
      hexToVec3(colors[1]),
      hexToVec3(colors[2]),
    ];
    gl.uniform3f(color1Location, ...c1);
    gl.uniform3f(color2Location, ...c2);
    gl.uniform3f(color3Location, ...c3);

    // ----- Resize handler -----
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      const width = Math.floor(displayWidth * dpr);
      const height = Math.floor(displayHeight * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);

        if (resolutionLocation) {
          gl.uniform2f(resolutionLocation, width, height);
        }
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
      // When static, re-render a single frame on resize so the canvas is correct
      if (!animate) {
        renderFrame(0);
      }
    });
    resizeObserver.observe(canvas);

    // ----- Render -----
    let animationFrameId = 0;

    const renderFrame = (timestamp: number) => {
      const time = timestamp * 0.001; // Convert ms → seconds

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      if (timeLocation) {
        gl.uniform1f(timeLocation, time);
      }

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    if (animate) {
      const loop = (timestamp: number) => {
        renderFrame(timestamp);
        animationFrameId = requestAnimationFrame(loop);
      };
      animationFrameId = requestAnimationFrame(loop);
    } else {
      // Render a single static frame (time = 0)
      renderFrame(0);
    }

    // ----- Cleanup -----
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      resizeObserver.disconnect();
      gl.deleteBuffer(positionBuffer);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
    };
  }, [colors, animate]);

  return (
    <canvas
      ref={canvasRef}
      className={className ? `size-full block ${className}` : "size-full block"}
    />
  );
}
