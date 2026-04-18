import { TextWavy } from "@/components/systaliko-ui/text-wavy";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { products_cards } from "@/constants";

export function Products() {
  return (
    <section className="bg-foreground text-background py-12 px-8 space-y-8">
      <div className="flex items-end gap-8 justify-center flex-wrap max-w-5xl mx-auto">
        <div className="space-y-4 flex-1">
          <TextWavy
            fontWeights={[500, 700, 500]}
            colors={["var(--accent)", "var(--primary)", "var(--accent)"]}
            text="&#9642; Turn Knowledge into Action"
            className="tracking-wide"
          />
          <h2 className="text-2xl font-medium text-balance">
            Smart AI Modules That Adapt to Your Workflow
          </h2>
          <Button variant={"secondary"}>Get started</Button>
        </div>

        <p className="flex-1 min-w-[35ch] text-balance text-muted text-sm">
          Cognify is built as a modular system, activate only what you need,
          expand when you're ready. These components plug into your stack and
          deliver immediate value.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {products_cards.map((product) => (
          <div
            key={product.id}
            className="group flex-1 max-w-3xs min-w-52 p-6 border border-border/10 transition-colors duration-200 hover:border-primary/20 space-y-4"
          >
            <div className="size-10 bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors duration-200">
              <product.icon className="size-5" />
            </div>
            <h3>{product.label}</h3>

            <p className="text-muted-foreground text-sm line-clamp-6">
              {product.description}
            </p>

            <Button className={"text-white"} variant={"link"}>
              Learn more <ChevronRightIcon />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
