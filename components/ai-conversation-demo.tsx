"use client";

import * as React from "react";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionConfig,
} from "motion/react";
import {
  AiAnswer,
  AiAvatar,
  AiSource,
  AiStatus,
} from "@/components/ai-interface";
import { TypingText } from "@/components/typing-text";
import { cn } from "@/lib/utils";

// --- Types & Context ---

export type DemoPhase =
  | "idle"
  | "typing-user"
  | "thinking"
  | "sources"
  | "typing-answer"
  | "complete"
  | "exiting";

export interface TimingConfig {
  pauseBeforeStart: number;
  thinking: number;
  sourcesStagger: number;
  pauseBeforeAnswer: number;
  holdComplete: number;
}

const DEFAULT_TIMING: TimingConfig = {
  pauseBeforeStart: 400,
  thinking: 1600,
  sourcesStagger: 450,
  pauseBeforeAnswer: 600,
  holdComplete: 3500,
};

interface StoryBoardContextType {
  phase: DemoPhase;
  setPhase: (phase: DemoPhase) => void;
  cycleKey: number;
  visibleSourceCount: number;
}

const StoryBoardContext = React.createContext<
  StoryBoardContextType | undefined
>(undefined);

export function useStoryBoard() {
  const context = React.useContext(StoryBoardContext);
  if (!context) {
    throw new Error("StoryBoard components must be used within a <StoryBoard>");
  }
  return context;
}

// --- Main Parent Component ---
interface StoryBoard extends HTMLMotionProps<"div"> {
  userTiming?: Partial<TimingConfig>;
  sourceCount?: number;
}

export function StoryBoard({
  userTiming = DEFAULT_TIMING,
  sourceCount = 2,
  children,
  ...props
}: StoryBoard) {
  const [cycleKey, setCycleKey] = React.useState(0);
  const [phase, setPhase] = React.useState<DemoPhase>("idle");
  const [visibleSourceCount, setVisibleSourceCount] = React.useState(0);

  // const timing = React.useMemo(
  //   () => ({ ...DEFAULT_TIMING, ...userTiming }),
  //   [userTiming]
  // );

  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    if (phase === "idle") {
      timeoutId = setTimeout(() => {
        setPhase("typing-user");
      }, userTiming.pauseBeforeStart);
    } else if (phase === "thinking") {
      timeoutId = setTimeout(() => {
        setPhase("sources");
      }, userTiming.thinking);
    } else if (phase === "sources") {
      let count = 0;
      intervalId = setInterval(() => {
        count++;
        setVisibleSourceCount(count);
        if (count >= sourceCount) {
          clearInterval(intervalId);
          timeoutId = setTimeout(() => {
            setPhase("typing-answer");
          }, userTiming.pauseBeforeAnswer);
        }
      }, userTiming.sourcesStagger);
    } else if (phase === "complete") {
      timeoutId = setTimeout(() => {
        setPhase("exiting"); // Trigger exit animation
      }, userTiming.holdComplete);
    } else if (phase === "exiting") {
      timeoutId = setTimeout(() => {
        setVisibleSourceCount(0);
        setCycleKey((k) => k + 1); // Trigger restart
        setPhase("idle"); // Enter idle state to pause before restarting
      }, 500); // Wait for exit animation to complete
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [phase, cycleKey, userTiming, sourceCount]);

  return (
    <StoryBoardContext.Provider
      value={{ phase, setPhase, cycleKey, visibleSourceCount }}
    >
      <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.5 }}>
        <AnimatePresence mode="wait">
          {phase !== "idle" && phase !== "exiting" && (
            <motion.div
              key={cycleKey}
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
              {...props}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </StoryBoardContext.Provider>
  );
}

// --- Compound Components ---

StoryBoard.UserMessage = function StoryBoardUserMessage({
  text,
  speed = 25,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const { setPhase, cycleKey } = useStoryBoard();
  return (
    <TypingText
      className={className}
      key={`user-${cycleKey}`}
      text={text}
      speed={speed}
      onComplete={() => setPhase("thinking")}
    />
  );
};

StoryBoard.AiBlock = function StoryBoardAiBlock({
  children,
  avatar,
  className,
}: {
  children: React.ReactNode;
  avatar?: React.ReactNode;
  className?: string;
}) {
  const { phase } = useStoryBoard();
  return (
    <motion.div
      className={cn("flex items-start gap-4", className)}
      initial={false}
      animate={phase !== "typing-user" ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { delay: 0.1 },
        },
      }}
    >
      {avatar}
      <div className="flex flex-col gap-3 min-w-0 flex-1">{children}</div>
    </motion.div>
  );
};

StoryBoard.Status = function StoryBoardStatus({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { phase } = useStoryBoard();
  return (
    <AnimatePresence mode="popLayout">
      {phase === "thinking" && (
        <motion.div
          key="thinking"
          layout
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
        >
          <AiStatus>{children}</AiStatus>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

StoryBoard.Sources = function StoryBoardSources({
  children,
  ...props
}: HTMLMotionProps<"div">) {
  const { phase, visibleSourceCount } = useStoryBoard();
  const isVisible =
    phase === "sources" ||
    phase === "typing-answer" ||
    phase === "complete" ||
    phase === "exiting";

  return (
    <AnimatePresence mode="popLayout">
      {isVisible && (
        <motion.div
          key="sources"
          layout
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          {...props}
        >
          <AiSource visibleCount={visibleSourceCount} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

StoryBoard.Answer = function StoryBoardAnswer() {
  const { phase, setPhase } = useStoryBoard();
  const isVisible =
    phase === "typing-answer" || phase === "complete" || phase === "exiting";

  return (
    <AnimatePresence mode="popLayout">
      {isVisible && (
        <motion.div
          key="answer"
          layout
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
        >
          <AiAnswer
            startTyping={
              phase === "typing-answer" ||
              phase === "complete" ||
              phase === "exiting"
            }
            onTypingComplete={() => {
              if (phase === "typing-answer") {
                setPhase("complete");
              }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Pre-composed Export ---

const USER_MESSAGE = "How do I configure the SSO for my enterprise team?";

export function AiConversationDemo() {
  return (
    <div className="px-2 py-4 h-[260px] place-content-center transition-all duration-500 overflow-hidden">
      <StoryBoard className="space-y-4">
        <div className="rounded-2xl rounded-tl-none border bg-input w-fit px-2.5 py-1 shadow-sm">
          <StoryBoard.UserMessage
            className="text-[10px] leading-none"
            text={USER_MESSAGE}
          />
        </div>

        <StoryBoard.AiBlock
          avatar={<AiAvatar imageUrl="/cognify.png" className="shadow-sm" />}
        >
          <StoryBoard.Status>Scanning Knowledge Base...</StoryBoard.Status>
          <StoryBoard.Sources />
        </StoryBoard.AiBlock>
        <StoryBoard.Answer />
      </StoryBoard>
    </div>
  );
}
