import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";
import { TextWavy } from "../systaliko-ui/text-wavy";
import { AnimatedBorder } from "../animated-border";

function FAQText() {
  return (
    <div className="space-y-3">
      <TextWavy
        className="inline-block text-sm font-medium tracking-wide"
        text="or reach support@cognify.com"
        colors={["var(--muted)", "var(--primary)", "var(--muted)"]}
        fontWeights={["500", "700", "500"]}
        delayTime={2}
      />
      <h1 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight text-balance">
        Have a question ?
      </h1>
    </div>
  );
}
export function FAQ() {
  return (
    <div className="p-16 relative min-h-screen bg-background text-foreground z-2 border-b">
      <div
        className="relative py-12 px-10 rounded-xl space-y-10 bg-foreground text-background"
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(0, 0, 0, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(63, 94, 194, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(134, 34, 34, 0.3) 0%, transparent 80%)
        `,
        }}
      >
        <AnimatedBorder className="absolute size-full inset-0  border border-primary/50" />

        <FAQText />
        <Accordion className="bg-foreground/80 backdrop-blur-2xl shadow-xs rounded-lg border border-border/20">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className=" border-b border-b-border/20 px-6 py-2.5 last:border-b-0"
            >
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="py-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
