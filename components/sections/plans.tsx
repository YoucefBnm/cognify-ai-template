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
import { SectionTitle } from "../section-title";
import { SectionHeader } from "../section-header";

const price = pricing_plans[1].price;
const savings = typeof price !== "string" ? calculateYearlySavings(price) : 0;

export function Plans() {
  return (
    <section className="pb-8">
      <SectionTitle title="&#9642; Our pricing" />

      <SectionHeader
        title="Flexible Plans for Teams of Any Size"
        paragraph="Choose a plan that fits your growth stage, start small, scale confidently, and only pay for what delivers real value."
      />

      <Pricing className="max-w-6xl px-2 mx-auto space-y-6">
        <div className="flex items-center justify-center gap-2">
          <span className="text-muted-foreground">Monthly</span>

          <PricingIntervalSwitch />
          <span className="text-muted-foreground">Yearly</span>
          <Badge className="shadow-sm shadow-black/15 text-[10px] h-5 text-green-900 border-green-200 bg-green-100">
            Save {savings}%
          </Badge>
        </div>

        <div className="flex flex-wrap justify-center items-start">
          {pricing_plans.map((plan) => {
            return (
              <PricingCard
                key={plan.id}
                className={clsx(
                  "relative md:flex-1 flex flex-col p-6 bg-transparent ",
                  plan.featured
                    ? `
                    border border-dashed border-b-transparent 
                    before:absolute before:-top-6 before:size-6 before:-left-6 before:border-dashed before:border before:border-border/80 before:border-t-transparent before:border-l-transparent  
                    after:absolute after:-top-6 after:size-6 after:-right-6  after:border after:border-dashed after:border-border/80 after:border-r-transparent after:border-t-transparent
                    `
                    : "border-none",
                )}
              >
                {plan.featured && (
                  <>
                    <span className="absolute top-0 left-0 size-2 bg-border -translate-y-1/2 -translate-x-1/2" />
                    <span className="absolute top-0 right-0 size-2 bg-border -translate-y-1/2 translate-x-1/2" />
                  </>
                )}
                <PricingPackage className="flex-col gap-4 items-start">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.featured && (
                      <Badge className="bg-linear-to-b from-secondary/20 from-5% to-primary to-100% h-6 rounded-full  shadow-[0px_6px_6px_-3px_rgba(0,0,0,0.08),0px_3px_3px_-1.5px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(255,255,255,0.12)_inset,0px_1px_0px_0px_rgba(255,255,255,0.12)_inset]">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
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
