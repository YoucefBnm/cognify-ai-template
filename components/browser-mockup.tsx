import { cn } from "@/lib/utils";
import React from "react";

export function BrowserMockup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative  border shadow-2xl overflow-hidden",
        "before:absolute before:pointer-events-none before:z-0 before:inset-0 before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] before:opacity-20",
        "after:absolute after:inset-0 after:bg-linear-to-br after:from-blue-50/50 after:via-transparent after:to-purple-50/50 dark:after:from-blue-950/30 dark:after:to-purple-950/30 after:pointer-events-none",
        className,
      )}
      data-slot="browser-mockup"
      {...props}
    />
  );
}

export function BrowserMockupBody({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "size-full relative z-2 flex flex-col bg-background overflow-hidden border shadow-sm",
        className,
      )}
      data-slot="browser-mockup-body"
      {...props}
    />
  );
}

export function BrowserMockupHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "h-10 border-b bg-muted/20 px-4 gap-2 flex items-center",
        className,
      )}
      data-slot="browser-mockup-header"
      {...props}
    />
  );
}
export function BrowserMockupControls({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        "*:size-3 rounded-full *:aspect-square *:rounded-full",
        className,
      )}
      data-slot="browser-mockup-controls"
      {...props}
    >
      <span className="bg-red-500" />
      <span className="bg-yellow-500" />
      <span className="bg-green-500" />
    </div>
  );
}
export function BrowserMockupAddress({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-secondary text-secondary-foreground py-0.5 px-2 text-xs",
        className,
      )}
      data-slot="browser-mockup-address"
      {...props}
    />
  );
}
