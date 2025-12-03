import { cn } from "@/lib/utils";
import React from "react";

export function CardMockup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative  border p-4 shadow-2xl overflow-hidden",
        "before:absolute before:pointer-events-none before:z-0 before:inset-0 before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] before:opacity-20",
        "after:absolute after:inset-0 after:bg-linear-to-br after:from-blue-50/50 after:via-transparent after:to-purple-50/50 dark:after:from-blue-950/30 dark:after:to-purple-950/30 after:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}

export function CardMockupBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "size-full relative z-2 flex flex-col bg-background overflow-hidden border shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function BrowserHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "h-10 border-b bg-muted/30 flex items-center px-4 space-x-2",
        className
      )}
      {...props}
    >
      <div className="size-3 rounded-full bg-red-500/20" />
      <div className="size-3 rounded-full bg-yellow-500/20" />
      <div className="size-3 rounded-full bg-green-500/20" />
      {children}
    </div>
  );
}
