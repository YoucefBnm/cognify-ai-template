"use client";
import { motion, MotionConfig, stagger } from "motion/react";
import { ANIMATION_VARIANTS } from "../systaliko-ui/animation-variants";
import { TextWavy } from "../systaliko-ui/text-wavy";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import {
  BrowserMockup,
  BrowserMockupAddress,
  BrowserMockupBody,
  BrowserMockupControls,
  BrowserMockupHeader,
} from "../browser-mockup";
import { AiConversationDemo } from "../ai-conversation-demo";

const variants = ANIMATION_VARIANTS["blur"];

function ShowcaseText() {
  return (
    <motion.div
      className="space-y-4 "
      initial="hidden"
      whileInView="visible"
      transition={{ delayChildren: stagger(0.2) }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className="flex gap-2 items-center" variants={variants}>
        <div className="flex justify-center items-center rounded p-1.5 aspect-square ring ring-ring/20 bg-gradient-to-br from-accent to-chart-2 text-accent-foreground">
          <Logo className="w-4" />
        </div>
        <TextWavy
          className="text-sm font-medium tracking-wide"
          text="Reduces repetitive ticket volume"
          colors={[
            "var(--muted-foreground)",
            "var(--primary)",
            "var(--muted-foreground)",
          ]}
          fontWeights={["500", "700", "500"]}
          delayTime={2}
        />
      </motion.div>
      <MotionConfig transition={{ duration: 0.4, ease: "easeOut" }}>
        <motion.h2
          variants={variants}
          className="text-2xl font-medium tracking-tight"
        >
          Answering customers queries in real time
        </motion.h2>
        <motion.p
          variants={variants}
          className="text-sm text-muted-foreground text-balance max-w-[75ch]"
        >
          Conversational assistant that answers customer queries in real-time
          using your verified knowledge base. It reduces repetitive ticket
          volume and provides fast, human-like responses that remain consistent
          with your policies.
        </motion.p>

        <motion.div variants={variants} className="flex gap-4 flex-wrap">
          <Button>Join Waitlist</Button>
        </motion.div>
      </MotionConfig>
    </motion.div>
  );
}
function ShowcaseAnimation() {
  return (
    <div className="shadow-2xs border border-primary/20 p-8 bg-accent">
      <BrowserMockup className="rounded-xl">
        <BrowserMockupHeader className="bg-muted">
          <BrowserMockupControls className="*:size-2 gap-1.5" />
          <BrowserMockupAddress className="rounded-full ml-1 text-[10px]">
            https://chat.cognify.ai
          </BrowserMockupAddress>
        </BrowserMockupHeader>
        <BrowserMockupBody>
          <AiConversationDemo />
        </BrowserMockupBody>
      </BrowserMockup>
    </div>
  );
}
export function ProductShowcase() {
  return (
    <section className="min-h-screen place-content-center">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] justify-center items-center gap-12 px-8 max-w-6xl mx-auto py-12">
        <ShowcaseText />
        <ShowcaseAnimation />
      </div>
    </section>
  );
}
