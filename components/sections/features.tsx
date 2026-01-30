"use client";
import { AiScreen } from "@/components/ai-screen";
import { Integrations } from "@/components/integrations";
import { Link2Icon, ListFilterIcon, SparklesIcon, ZapIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { SmartSummaries } from "@/components/smart-summaries";
import { cn } from "@/lib/utils";
import { TicketTirage } from "../ticket-tirage";

const features = [
  {
    id: 0,
    title: "Instant Answers from Your Docs",
    description:
      "Connect existing knowledge (docs, help centers, product specs) and let Cognify return accurate, context-aware answers to customers and agents.",
    benefit: "Reduce average response time and lighten agent load.",
    icon: ZapIcon,
    component: AiScreen,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: 1,
    title: "AI-Powered Ticket Triage",
    description:
      "Automatically categorize, prioritize, and route tickets so your team works on what matters most.",
    benefit: "Faster SLAs and lower operational cost.",
    icon: ListFilterIcon,
    component: TicketTirage,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    id: 2,
    title: "Smart Summaries & Insights",
    description:
      "Turn long conversations and documents into clear summaries and action items.",
    benefit: "Faster decision making and better handoffs.",
    icon: SparklesIcon,
    component: SmartSummaries,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    id: 3,
    title: "Seamless Integrations",
    description:
      "Out-of-the-box connectors for Zendesk, Intercom, Salesforce, Slack, Google Drive, and more.",
    benefit: "Keep workflows — just add AI.",
    icon: Link2Icon,
    component: Integrations,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export function Features() {
  const [activeFeature, setActiveFeature] = React.useState<number>(0);

  return (
    <section className="py-16">
      <div className="container space-y-12 mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2>
            Everything you need to build a smarter support system
          </h2>
          <p className="text-muted-foreground text-balance">
            Cognify transforms your customer experience with autonomous agents
            that understand your product as well as you do.
          </p>
        </div>

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
                      : "bg-transparent border-transparent hover:bg-accent hover:scale-[1.01]"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "p-2 rounded-lg shrink-0 transition-colors",
                        activeFeature === index ? feature.bg : "bg-muted "
                      )}
                    >
                      <Icon
                        className={cn(
                          "size-6",
                          activeFeature === index
                            ? feature.color
                            : "text-muted-foreground"
                        )}
                      />
                    </div>
                    <div>
                      <h3
                        className={cn(
                          "font-semibold text-lg mb-2",
                          activeFeature === index
                            ? "text-slate-900 dark:text-white"
                            : "text-slate-600 dark:text-slate-400"
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
                          <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs mr-1">
                            Benefit
                          </span>
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
                        return <Component key={feature.id} />;
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
