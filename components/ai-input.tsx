import { ArrowUpIcon } from "lucide-react";
import { AnimatedBorder } from "./animated-border";
import { TypingText } from "./typing-text";

export function AiInput() {
  return (
    <div className="relative h-14  w-full z-20">
      <TypingText
        text="get me insights on growing revenue"
        className="text-sm *:bg-primary absolute left-2 top-2"
      />
      <textarea
        aria-label="AI Prompt Input"
        className="size-full bg-transparent border-0 outline-none focus:outline-none focus:ring-0 resize-none text-left p-0"
        disabled
      />
    </div>
  );
}
export function AiChat() {
  return (
    <div
      className="mx-auto p-2 overflow-hidden w-full max-w-lg rounded-[1.5rem]  bg-foreground/80 text-background backdrop-blur "
      style={{
        boxShadow:
          "0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.15), 0 0 0.6875rem 0 rgba(255, 255, 255, 0.16) inset",
      }}
    >
      <div
        className="rounded-[1rem] p-4 relative rounded size-full  overflow-hidden"
        style={{
          WebkitMaskImage: "-webkit-radial-gradient(white, white)",
          maskImage: "radial-gradient(white, white)",
        }}
      >
        <AnimatedBorder className="absolute inset-0 opacity-30 border-border/30" />

        <AiInput />

        <div className="justify-self-end bg-primary flex justify-center items-center size-8 text-primary-foreground/70 rounded-full  p-1.5">
          <ArrowUpIcon className="stroke-1.5" />
        </div>
      </div>
    </div>
  );
}
