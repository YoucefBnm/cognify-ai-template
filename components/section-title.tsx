import { cn } from "@/lib/utils";
import { TextWavy } from "./systaliko-ui/text-wavy";
import React from "react";

export function SectionTitle({
  title,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { title: string }) {
  return (
    <div className={cn("relative w-full border-y", className)} {...props}>
      <div
        className={cn(
          "relative max-w-6xl px-2 py-2.5 mx-auto text-center ",
          "before:xl:absolute before:xl:top-0 before:left-0  before:xl:size-2 before:xl:bg-border before:xl:-translate-x-1/2 before:xl:-translate-y-1/2",
          "after:xl:absolute after:xl:top-0 after:xl:right-0 after:xl:size-2 after:xl:bg-border after:xl:translate-x-1/2 after:xl:-translate-y-1/2",
        )}
      >
        <TextWavy
          colors={[
            "var(--muted-foreground)",
            "var(--primary)",
            "var(--muted-foreground)",
          ]}
          fontSizes={["14px", "16px", "14px"]}
          className="tracking-wide"
          text={title}
        />
        {children}
        <span className="hidden xl:inline absolute bottom-0 left-0 size-2 bg-border -translate-x-1/2 translate-y-1/2" />
        <span className="hidden xl:inline absolute bottom-0 right-0 size-2 bg-border translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
}
