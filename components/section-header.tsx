import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  paragraph,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { title: string; paragraph: string }) {
  return (
    <div
      className={cn("max-w-4xl mx-auto text-center space-y-2 my-6", className)}
      {...props}
    >
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="text-muted-foreground mx-auto text-balance text-sm">
        {paragraph}
      </p>
      {children}
    </div>
  );
}
