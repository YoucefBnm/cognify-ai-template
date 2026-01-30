import { TextWavy } from "@/components/systaliko-ui/text-wavy";
import { Button } from "@/components/ui/button";
import {
  BotMessageSquareIcon,
  BrainCircuitIcon,
  ChartNetworkIcon,
  LightbulbIcon,
} from "lucide-react";

const products_cards = [
  {
    id: "product-chat",
    label: "Coginfy Chat",
    icon: BotMessageSquareIcon,
    description:
      "Conversational assistant that answers customer queries in real-time using your verified knowledge base. It reduces repetitive ticket volume and provides fast, human-like responses that remain consistent with your policies.",
  },
  {
    id: "product-assistant",
    label: "Coginfy Assist",
    icon: BrainCircuitIcon,
    description:
      "AI companion for support and sales agents. It offers real‑time suggested replies, contextual lookup, entity highlighting, and automated ticket summarization to accelerate resolution times and reduce cognitive load.",
  },
  {
    id: "product-insights",
    label: "Coginfy Insights",
    icon: LightbulbIcon,
    description:
      "Intelligence analytics dashboard. It reveals trends, patterns, content gaps, model accuracy, most‑asked topics, and support efficiency metrics — helping you continuously improve your knowledge assets.",
  },
  {
    id: "product-connect",
    label: "Coginfy Connect",
    icon: ChartNetworkIcon,
    description:
      "Integrations hub that makes setup seamless. Connects with support centers, email pipelines, CRMs, internal drives, and custom endpoints so data flows securely and automatically.",
  },
];

export function Products() {
  return (
    <section className="border-y">
      <div className="grid grid-cols-1 grid-rows-auto md:grid-rows-1 md:grid-cols-2 items-start">
        <div className="md:sticky md:top-8 p-8 md:p-20 space-y-6">
          <TextWavy
            className="text-sm tracking-wide"
            text="Turn Knowledge into Action"
            colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0,0.1)", "rgba(0,0,0, 0.4)"]}
          />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter text-balance">
            Smart AI Modules That Adapt to Your Workflow
          </h2>
          <p className="text-muted-foreground max-w-[47ch]">
            Cognify is built as a modular system, activate only what you need,
            expand when you&apos;re ready. These components plug into your stack
            and deliver immediate value.
          </p>
          <Button>Start free trial</Button>
        </div>

        <div className="flex flex-wrap justify-start  md:*:odd:border-x [&>*:first-child]:border-b [&>*:nth-child(2)]:border-b">
          {products_cards.map(({ id, label, icon, description }) => {
            const Icon = icon;
            return (
              <div className="p-8 space-y-4 basis-1/2" key={id}>
                <Icon className="size-6 text-muted-foreground" />
                <h3 className="text-xl font-medium">{label}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
