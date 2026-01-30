import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FileTextIcon, SparklesIcon } from "lucide-react";
import { Badge } from "./ui/badge";

export function UserMessage({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-tr-none text-sm shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function AiAvatar({
  imageUrl,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { imageUrl?: string }) {
  return (
    <Avatar className={cn("size-8 border bg-background", className)} {...props}>
      <AvatarImage src={imageUrl} />
      <AvatarFallback className="bg-primary/10 text-primary text-xs">
        {children}
      </AvatarFallback>
    </Avatar>
  );
}
export function AiStatus() {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex items-center gap-2 text-xs text-secondary-foreground mb-1">
        <SparklesIcon className="size-3 text-primary animate-pulse" />
        <span>Scanning Knowledge Base...</span>
      </div>
    </div>
  );
}
export function AiSource() {
  return (
    <div className="flex gap-2 mb-2">
      <div className="flex items-center gap-2  bg-muted border px-3 py-1.5 rounded-lg text-xs  shadow-sm">
        <FileTextIcon className="size-3 text-orange-500" />
        Docs: SSO Setup
      </div>
      <div className="flex items-center gap-2  bg-muted border px-3 py-1.5 rounded-lg text-xs  shadow-sm">
        <FileTextIcon className="size-3 text-blue-500" />
        Guide: Enterprise
      </div>
    </div>
  );
}
export function AiAnswer() {
  return (
    <div className="overflow-hidden">
      <div className="bg-muted border px-4 py-3 rounded-2xl rounded-tl-none text-sm shadow-sm ">
        <p className="leading-relaxed">
          To configure SSO for your enterprise team, navigate to
          <span className="font-semibold text-primary mx-1">
            Settings &gt; Security
          </span>
          . You&apos;ll need your Identity Provider (IdP) metadata XML file.
        </p>
        <div className="mt-3 pt-3 border-t flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Confidence: 98%</span>
          <Badge
            variant="outline"
            className="text-[10px] h-5 text-green-600 border-green-200 bg-green-50"
          >
            Verified Source
          </Badge>
        </div>
      </div>
    </div>
  );
}
