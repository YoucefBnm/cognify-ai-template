"use client";
import { TextWavy } from "@/components/systaliko-ui/text-wavy";
import { Button } from "@/components/ui/button";
import { animation_variants } from "@/lib/animation-variants";
import { motion, MotionConfig, stagger } from "motion/react";

export function Hero() {
  const variants = animation_variants["blur"];
  return (
    <section className="pt-20 px-2">
      <motion.div
        className="max-w-3xl mx-auto w-full flex flex-col space-y-6 items-center text-center justify-center"
        initial="hidden"
        whileInView="visible"
        transition={{ delayChildren: stagger(0.2) }}
        viewport={{ once: true }}
      >
        <motion.div variants={variants}>
          <TextWavy
            className="text-sm tracking-wide"
            text="Turn Knowledge into Action"
          />
        </motion.div>
        <MotionConfig transition={{ duration: 0.4, ease: "easeOut" }}>
          <motion.h1
            variants={variants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter text-balance bg-clip-text text-transparent bg-linear-to-b from-secondary to bg-secondary-foreground"
          >
            AI that Powers Better Customer Experiences
          </motion.h1>
          <motion.p
            variants={variants}
            className="text-muted-foreground text-balance md:line-clamp-2"
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
    </section>
  );
}
