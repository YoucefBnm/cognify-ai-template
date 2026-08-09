"use client";
import { TextWavy } from "@/components/systaliko-ui/text-wavy";
import { Button } from "@/components/ui/button";
import { animation_variants } from "@/lib/animation-variants";
import { motion, MotionConfig, stagger } from "motion/react";
import { DotOrbit } from "@paper-design/shaders-react";
import React from "react";

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
          className="text-sm font-medium tracking-wide"
          text="Turn Knowledge into Action"
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
        <motion.h1
          variants={variants}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-balance"
        >
          AI that Powers Better Customer Experiences
        </motion.h1>
        <motion.p
          variants={variants}
          className="text-sm text-muted-foreground text-balance max-w-[55ch]"
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
    <section className="px-4 pt-4">
      <div className="grid grid-cols-1 grid-rows-1 h-screen place-content-center *:col-start-1 *:row-start-1 relative ">
        <div className="size-full  bg-secondary ring-2 ring-ring/10 shadow-2xs rounded-3xl overflow-hidden">
          <DotOrbit
            width={1280}
            height={720}
            colors={["#A3A3A3"]}
            colorBack="#e0e0e0"
            stepsPerColor={1}
            size={0.24}
            sizeRange={0}
            spreading={0.3}
            speed={6}
            scale={0.2}
          />
        </div>
        <HeroText />
      </div>
    </section>
  );
}
