"use client";
import {
  AiAnswer,
  AiAvatar,
  AiSource,
  AiStatus,
  UserMessage,
} from "@/components/ai-interface";
import { BrowserHeader, CardMockupBody } from "@/components/card-mockup";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { BrainCircuitIcon, LogInIcon, WorkflowIcon } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import React from "react";

interface ProcessCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ElementType;
  title: string;
  description: string;
}

function ProcessCard({
  icon,
  title,
  description,
  className,
  children,
  ...props
}: ProcessCardProps) {
  const Icon = icon;
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="flex items-center gap-2">
        <Icon className="size-5" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-muted-foreground">{description}</p>
      {children}
    </div>
  );
}

function ProcessScreen({
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
function ProcessDesktop() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["10% end", "center end"],
  });

  const screenX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    ["20%", "40%", "0%", "40%"]
  );
  const screenScale = useTransform(scrollYProgress, [0, 0.3], [1.4, 1]);
  const screenTransform = useMotionTemplate`scale(${screenScale}) translateX(${screenX})`;
  const text1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.5, 0.9, 1], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[350vh]">
      <div className="sticky top-0 left-0 h-screen w-full">
        <div className="overflow-hidden py-16 h-full">
          <motion.div
            className="h-full mx-auto origin-top px-8 place-content-center"
            style={{ transform: screenTransform }}
          >
            <ProcessScreen className="w-3/5 max-h-full aspect-video min-h-full" />
          </motion.div>
        </div>
        <motion.div
          style={{ opacity: text1Opacity }}
          className="pl-8 absolute top-1/5 left-0 max-w-1/3 space-y-4"
        >
          <ProcessCard
            icon={LogInIcon}
            title="Connect"
            description="Sync your knowledge sources and support tools in a few clicks."
          />
        </motion.div>
        <motion.div
          style={{ opacity: text2Opacity }}
          className="pr-8 absolute top-1/5 right-0 max-w-1/3 space-y-2 "
        >
          <ProcessCard
            icon={BrainCircuitIcon}
            title="Train"
            description="Add domain examples or fine-tune responses with your tone and policies."
          />
        </motion.div>
        <motion.div
          style={{ opacity: text3Opacity }}
          className="pl-8 absolute top-1/5 left-0 max-w-1/3 space-y-2"
        >
          <ProcessCard
            icon={WorkflowIcon}
            title="Automate"
            description="Route tickets, suggest replies, and serve customers through chat, email, or internal tools."
          >
            <Button variant={"secondary"}>Setup your workflows</Button>
          </ProcessCard>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessMobile() {
  return (
    <section className="py-12 px-8">
      <div className="flex flex-col justify-center items-center gap-6">
        <ProcessScreen className="min-w-2xs max-w-xl " />
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LogInIcon className="size-5 text-muted-foreground" />{" "}
              <h2 className="font-semibold text-xl tracking-tight">Connect</h2>
            </div>
            <p>
              Sync your knowledge sources and support tools in a few clicks.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BrainCircuitIcon className="size-5 text-muted-foreground" />{" "}
              <h2 className="font-semibold text-xl tracking-tight">Train</h2>
            </div>
            <p>
              Add domain examples or fine-tune responses with your tone and
              policies.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <WorkflowIcon className="size-5 text-muted-foreground" />
              <h2 className="font-semibold text-xl tracking-tight">Automate</h2>
            </div>
            <p>
              Route tickets, suggest replies, and serve customers through chat,
              email, or internal tools.
            </p>
            <Button variant={"secondary"} size={"sm"}>
              Setup your workflows
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const isMobile = useIsMobile();
  return isMobile ? <ProcessMobile /> : <ProcessDesktop />;
}
