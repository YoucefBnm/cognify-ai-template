"use client";
import { TextWavy } from "@/components/systaliko-ui/text-wavy";
import { Button } from "@/components/ui/button";
import { animation_variants } from "@/lib/animation-variants";
import { motion, MotionConfig, stagger } from "motion/react";
import { GradientShader } from "../gradient-shader";

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
      <motion.div variants={variants}>
        <TextWavy
          className="text-sm tracking-wide"
          text="Turn Knowledge into Action"
          colors={["var(--muted)", "var(--primary)", "var(--muted)"]}
          fontWeights={["500", "700", "500"]}
          delayTime={2}
        />
      </motion.div>
      <MotionConfig transition={{ duration: 0.4, ease: "easeOut" }}>
        <motion.h1
          variants={variants}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-balance bg-clip-text text-transparent bg-linear-to-b from-muted to bg-muted/70"
        >
          AI that Powers Better Customer Experiences
        </motion.h1>
        <motion.p
          variants={variants}
          className="text-sm text-muted text-balance max-w-[75ch]"
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
    <section className="w-full h-screen overflow-hidden grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 items-center">
      <GradientShader
        animate
        // colors={["#00458e", "#000328", "#121b67"]}
        colors={["#2D8B8B", "#3771BE", "#1E2019"]}
      />
      <HeroText />
    </section>
  );
}
