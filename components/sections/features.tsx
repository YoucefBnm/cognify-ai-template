"use client";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { SectionHeader } from "../section-header";
import { features } from "@/constants";

export function Features() {
  const [activeFeature, setActiveFeature] = React.useState<number>(0);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl px-2 mx-auto  space-y-12 ">
        <SectionHeader
          title="Everything you need to build a smarter support system"
          paragraph="Cognify transforms your customer experience with autonomous agents that understand your product as well as you do."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={cn(
                    "group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 text-left",
                    activeFeature === index
                      ? "bg-card border shadow-lg scale-[1.02]"
                      : "bg-transparent border-transparent hover:bg-accent hover:scale-[1.01]",
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "p-2 rounded-lg shrink-0 transition-colors",
                        activeFeature === index ? feature.bg : "bg-muted ",
                      )}
                    >
                      <Icon
                        className={cn(
                          "size-6",
                          activeFeature === index
                            ? feature.color
                            : "text-muted-foreground",
                        )}
                      />
                    </div>
                    <div>
                      <h3
                        className={cn(
                          "font-semibold text-lg mb-2",
                          activeFeature === index
                            ? "text-slate-900 dark:text-white"
                            : "text-slate-600 dark:text-slate-400",
                        )}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      {activeFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-sm font-medium leading-relaxed"
                        >
                          <Badge className="bdow-sm shadow-black/15 text-[10px] h-5  mr-1">
                            Benefit
                          </Badge>
                          {feature.benefit}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-7 sticky top-24">
            <div className="relative aspect-4/3 lg:aspect-square xl:aspect-4/3 rounded-3xl border  p-4 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 via-transparent to-secondary/40  pointer-events-none" />

              <div className="relative size-full bg-card rounded-2xl border shadow-sm overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="size-full"
                  >
                    {features.map((feature) => {
                      if (feature.id === activeFeature) {
                        const Component = feature.component;
                        return (
                          <Component
                            className="rounded-[15px]"
                            key={feature.id}
                          />
                        );
                      }
                      return null;
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
