"use client";
import { motion, MotionConfig, stagger } from "motion/react";
import { TextWavy } from "../systaliko-ui/text-wavy";
import { Button } from "../ui/button";
import { ArrowRightIcon, type LucideIcon } from "lucide-react";
import { ANIMATION_VARIANTS } from "../systaliko-ui/animation-variants";
import { Switch } from "../ui/switch";
import { Marquee } from "../marquee";
import { INTEGRATIONS_DATA } from "@/constants";

const variants = ANIMATION_VARIANTS["blur"];
function IntegrationText() {
  return (
    <motion.div
      className="max-w-xl mx-auto text-center space-y-3"
      initial="hidden"
      whileInView="visible"
      transition={{ delayChildren: stagger(0.2) }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div variants={variants}>
        <TextWavy
          className="text-sm font-medium tracking-wide"
          text="BenefitKeep workflows just add AI"
          colors={[
            "var(--accent)",
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
          className="text-3xl font-medium tracking-tight"
        >
          Seamless Integrations
        </motion.h2>
        <motion.p
          variants={variants}
          className="text-sm text-muted-foreground text-balance mx-auto max-w-[35ch]"
        >
          Out-of-the-box connectors for Zendesk, Intercom, Salesforce, Slack,
          Google Drive, and more.
        </motion.p>
      </MotionConfig>
    </motion.div>
  );
}
function IntegrationCard({
  color,
  Icon,
  name,
  desc,
  active,
}: {
  color: string;
  Icon: LucideIcon;
  name: string;
  desc: string;
  active: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-2 p-3 shadow-2xs bg-card text-card-foreground border border-border/50 rounded-full">
      <div className="flex items-center gap-3">
        <div
          className={`size-8 rounded-lg ${color} flex items-center justify-center text-white shadow-sm`}
        >
          <Icon className="size-4" />
        </div>
        <div>
          <h4 className="text-sm font-medium">{name}</h4>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
      <Switch checked={active} />
    </div>
  );
}
export function Integrations() {
  return (
    <section className="py-16 space-y-8 border-y">
      <IntegrationText />

      <div className="relative">
        <Marquee className="[--duration:20s]" pauseOnHover>
          {INTEGRATIONS_DATA.map((data) => (
            <IntegrationCard
              key={data.name}
              color={data.color}
              Icon={data.icon}
              name={data.name}
              desc={data.desc}
              active={data.active}
            />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </section>
  );
}
