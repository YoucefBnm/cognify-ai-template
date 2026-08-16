import { cn } from "@/lib/utils";
import React from "react";

export function AnimatedBorder({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "z-0 pointer-events-none touch-none overflow-hidden rounded-[inherit] border border-border/5 bg-transparent p-[1.5px]",
        className,
      )}
      style={{
        WebkitMask:
          "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000) border-box",
        mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000) border-box",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        ...style,
      }}
      data-slot="animated-border"
      {...props}
    >
      <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2">
        <div className="size-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,#fff_10%,transparent_20%)] will-change-transform" />
      </div>
    </div>
  );
}
