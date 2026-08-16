"use client";
import {
  calculateYearlySavings,
  Pricing,
  PricingCard,
  PricingFeature,
  PricingIntervalSwitch,
  PricingPackage,
  PricingValue,
} from "@/components/systaliko-ui/pricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { pricing_plans } from "@/constants";
import clsx from "clsx";
import { AnimatedBorder } from "../animated-border";

const price = pricing_plans[1].price;
const savings = typeof price !== "string" ? calculateYearlySavings(price) : 0;

export function Plans() {
  return (
    <section className="px-8 space-y-10 py-16">
      <div className="space-y-2 mx-auto text-center">
        <h2 className="text-2xl font-medium tracking-tight">
          Flexible Plans for Teams of Any Size
        </h2>
        <p className="text-muted-foreground text-sm max-w-[45ch] mx-auto text-balance">
          Choose a plan that fits your growth stage, start small, scale
          confidently, and only pay for what delivers real value.
        </p>
      </div>
      <Pricing className="max-w-6xl px-2 mx-auto space-y-8">
        <div className="flex items-center justify-center gap-2">
          <span className="text-muted-foreground">Monthly</span>

          <PricingIntervalSwitch />
          <span className="text-muted-foreground">Yearly</span>
          <Badge className="shadow-sm shadow-black/15 text-[10px] h-5 text-accent-foreground border-accent bg-accent">
            Save {savings}%
          </Badge>
        </div>

        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center items-start">
          {pricing_plans.map((plan) => {
            return (
              <PricingCard
                key={plan.id}
                className={clsx(
                  "relative md:flex-1 flex flex-col py-12 px-8 rounded-xl ring   ",
                  plan.featured
                    ? "bg-accent text-accent-foreground ring-primary/20"
                    : "bg-card text-card-foreground ring-ring/10",
                )}
              >
                {plan.featured && (
                  <AnimatedBorder className="absolute size-full inset-0  border border-foreground/10" />
                )}
                <PricingPackage className="flex-col gap-4 items-start">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    {plan.featured && (
                      <Badge
                        variant={"outline"}
                        className=" h-4.5 rounded-full shadow-xs text-primary shadow-black/15 ring-1 bg-primary/10 ring-primary/20 text-[10px]"
                      >
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm ">{plan.description}</p>
                  {typeof plan.price !== "string" ? (
                    <PricingValue
                      yearlyValue={plan.price.yearly}
                      monthlyValue={plan.price.monthly}
                      className="text-2xl font-semibold"
                    />
                  ) : (
                    <div className="font-semibold">Custom</div>
                  )}
                </PricingPackage>
                <Separator />
                <ul className="flex flex-col space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <PricingFeature
                      className="text-muted-foreground text-sm"
                      key={feature}
                    >
                      {feature}
                    </PricingFeature>
                  ))}
                </ul>

                <Button
                  variant={plan.featured ? "default" : "secondary"}
                  className="rounded-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </PricingCard>
            );
          })}
        </div>
      </Pricing>
    </section>
  );
}
