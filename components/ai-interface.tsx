import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FileTextIcon, SparklesIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion, Variants } from "motion/react";
import { TypingText } from "./typing-text";
import * as React from "react";

export function UserMessage({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-tr-none text-sm shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

export function AiAvatar({
  imageUrl,
  children,
  ...props
}: React.ComponentProps<typeof Avatar> & { imageUrl?: string }) {
  return (
    <Avatar size="sm" {...props}>
      <AvatarImage src={imageUrl} />
      <AvatarFallback className="bg-primary/10 text-primary text-xs">
        {children}
      </AvatarFallback>
    </Avatar>
  );
}

export function AiStatus({
  children = "Scanning Knowledge Base...",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="mb-1 flex items-center gap-2 text-xs">
        <SparklesIcon className="size-3 animate-pulse text-primary" />
        <span className="shimmer-text">{children}</span>
      </div>
    </div>
  );
}

const AI_SOURCES = [
  { label: "Docs: SSO Setup", iconClassName: "text-orange-500" },
  { label: "Guide: Enterprise", iconClassName: "text-blue-500" },
] as const;

function AiSourceChip({
  label,
  iconClassName,
}: {
  label: string;
  iconClassName: string;
}) {
  return (
    <div className="flex items-center gap-1 rounded-lg border bg-muted px-2 py-0.5 text-xs shadow-2xs">
      <FileTextIcon className={cn("size-2.5", iconClassName)} />
      {label}
    </div>
  );
}

export function AiSource({
  visibleCount = AI_SOURCES.length,
  itemVariants,
}: {
  visibleCount?: number;
  itemVariants?: Variants;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {AI_SOURCES.map((source, index) => {
        const chip = (
          <AiSourceChip
            label={source.label}
            iconClassName={source.iconClassName}
          />
        );

        if (!itemVariants) {
          return index < visibleCount ? (
            <div key={source.label}>{chip}</div>
          ) : null;
        }

        return (
          <motion.div
            key={source.label}
            variants={itemVariants}
            initial="hidden"
            animate={index < visibleCount ? "visible" : "hidden"}
          >
            {chip}
          </motion.div>
        );
      })}
    </div>
  );
}

const ANSWER_TEXT =
  "To configure SSO for your enterprise team, navigate to Settings > Security. You'll need your Identity Provider (IdP) metadata XML file.";

export function AiAnswer({
  startTyping = true,
  onTypingComplete,
}: {
  startTyping?: boolean;
  onTypingComplete?: () => void;
}) {
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    if (startTyping) setIsComplete(false);
  }, [startTyping]);

  const handleComplete = React.useCallback(() => {
    setIsComplete(true);
    onTypingComplete?.();
  }, [onTypingComplete]);

  return (
    <div className="overflow-hidden">
      <div className="rounded-2xl rounded-tl-none border bg-muted px-4 py-3 text-xs shadow-sm">
        <p className="leading-relaxed">
          {startTyping ? (
            isComplete ? (
              <>
                To configure SSO for your enterprise team, navigate to
                <span className="mx-1 font-semibold text-primary">
                  Settings &gt; Security
                </span>
                . You&apos;ll need your Identity Provider (IdP) metadata XML
                file.
              </>
            ) : (
              <TypingText
                text={ANSWER_TEXT}
                speed={22}
                onComplete={handleComplete}
              />
            )
          ) : null}
        </p>

        <motion.div
          initial={false}
          animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 4 }}
          transition={{ type: "spring", duration: 0.35, bounce: 0 }}
          className="mt-3 flex items-center justify-between border-t pt-3"
        >
          <span className="text-xs text-muted-foreground">Confidence: 98%</span>
          <Badge
            variant="outline"
            className="h-5 text-[10px] text-green-600 border-green-200 bg-green-50 shadow-sm shadow-black/15"
          >
            Verified Source
          </Badge>
        </motion.div>
      </div>
    </div>
  );
}
