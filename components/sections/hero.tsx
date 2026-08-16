"use client";
import { Button } from "@/components/ui/button";
import { animation_variants } from "@/lib/animation-variants";
import { motion, MotionConfig, stagger } from "motion/react";
import { ShaderGradient } from "../systaliko-ui/shader";
import { AiChat } from "../ai-input";

const variants = animation_variants["blur"];

function HeroText() {
  return (
    <motion.div
      className="max-w-3xl p-8 mx-auto w-full flex flex-col space-y-6 items-center text-center justify-center "
      initial="hidden"
      whileInView="visible"
      transition={{ delayChildren: stagger(0.2) }}
      viewport={{ once: true }}
    >
      <MotionConfig transition={{ duration: 0.4, ease: "easeOut" }}>
        <motion.h1
          variants={variants}
          className="text-4xl lg:text-5xl xl:text-6xl tracking-tight text-balance bg-clip-text text-transparent bg-linear-to-b from-foreground/60 to bg-foreground/80"
        >
          AI that Powers Better Customer Experiences
        </motion.h1>
        <AiChat />
        <motion.p
          variants={variants}
          className="text-xs text-muted-foreground text-balance max-w-[75ch]"
        >
          Cognify uses smart understanding and automation to answer customers
          faster, equip teams with context, and surface insights that grow
          revenue all without heavy engineering overhead.
        </motion.p>

        <motion.div variants={variants} className="flex gap-4 flex-wrap">
          <Button>Start free trial</Button>
          <Button variant="secondary">Learn more</Button>
        </motion.div>
      </MotionConfig>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="">
      <div className="grid grid-cols-1 grid-rows-1 h-screen place-content-center *:col-start-1 *:row-start-1 relative ">
        <ShaderGradient
          colors={["#ebebeb", "#9ab0e5", "#e2e6f1ff"]}
          intensity={5}
          density={4}
          className="size-full inset-0"
        />
        <HeroText />
      </div>
    </section>
  );
}
