import { ArrowRightIcon } from "lucide-react";
import { ShaderGradient } from "../systaliko-ui/shader";
import { TextWavy } from "../systaliko-ui/text-wavy";
import { Button } from "../ui/button";
import { achievements } from "@/constants";
import { TicketTirage } from "../ticket-tirage";
import { AnimatedBorder } from "../animated-border";

function WhyUsText() {
  return (
    <div className="flex flex-wrap gap-16 justify-between items-end">
      <div className="flex-1 space-y-4">
        <TextWavy
          className="inline-block text-sm font-medium tracking-wide"
          text="Make knowledge work faster"
          colors={[
            "var(--muted-foreground)",
            "var(--primary)",
            "var(--muted-foreground)",
          ]}
          fontWeights={["500", "700", "500"]}
          delayTime={2}
        />
        <h1 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight text-balance">
          Build AI tools that make knowledge work faster
        </h1>
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm text-muted-foreground text-balance">
          Cognify builds AI tools that make knowledge work faster, safer, and
          more helpful. We believe teams should spend time on impact not on
          searching for answers. Our mission: turn scattered documentation and
          conversations into usable, trusted intelligence.
        </p>
        <Button variant={"link"}>
          Join Waitlist <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}

function WhyUsMedia() {
  return (
    <div className="relative flex bg-foreground  max-w-5xl mx-auto flex-wrap gap-8 items-center justify-between relative rounded-3xl mx-4 py-12 px-8 w-full min-h-fit overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_92%,rgba(63,94,194,.42),transparent_38%),radial-gradient(circle_at_48%_106%,rgba(255,212,0,.16),transparent_34%),radial-gradient(circle_at_94%_12%,rgba(223,34,37,.14),transparent_34%)]"></div>
      <AnimatedBorder className="absolute inset-px  border-border/80 rounded rounded-[23px]" />

      <div className="space-y-2">
        {achievements.map((achiev) => (
          <div
            key={achiev.id}
            className="text-background relative text-sm  p-2 "
          >
            <h3 className="font-semibold  tabular-nums">{achiev.title}</h3>
            <h4 className="font-medium">{achiev.lead}</h4>
            <p className="text-muted-foreground text-sm">
              {achiev.description}
            </p>
          </div>
        ))}
      </div>
      <TicketTirage className="rounded-md shadow-2xs bg-card backdrop-blur-xl max-w-lg" />
    </div>
  );
}
export function WhyUs() {
  return (
    <section className="relative space-y-12 py-12 px-8">
      <WhyUsText />
      <WhyUsMedia />
    </section>
  );
}
