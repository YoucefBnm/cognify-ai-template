import { cn } from "@/lib/utils";
import {
  AiAnswer,
  AiAvatar,
  AiSource,
  AiStatus,
  UserMessage,
} from "./ai-interface";
import { BrowserHeader, CardMockupBody } from "./card-mockup";

export function AiScreen({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <CardMockupBody className={cn("rounded-lg", className)} {...props}>
      <BrowserHeader>
        <div className="ml-4 h-6 w-64 bg-muted rounded-md text-[10px] flex items-center px-2 text-muted-foreground">
          cognify.ai/agent/chat
        </div>
      </BrowserHeader>

      <div className="relative z-2 flex-1 p-8 flex flex-col place-content-center gap-8 bg-stone-50/50 dark:bg-stone-950/50">
        <UserMessage className="max-w-[80%] place-self-end">
          How do I configure the SSO for my enterprise team?
        </UserMessage>

        <div className="flex items-start gap-3">
          <AiAvatar imageUrl="/cognify.png" />

          <div className="flex flex-col gap-4 max-w-10/12">
            <AiStatus />
            <AiSource />

            <AiAnswer />
          </div>
        </div>
      </div>
    </CardMockupBody>
  );
}
