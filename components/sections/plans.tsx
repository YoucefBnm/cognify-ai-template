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

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
  price: { monthly: number; yearly: number } | "custom";
  features: string[];
}
const pricing_plans: PricingPlan[] = [
  {
    id: "pricing-plan-starter",
    name: "Starter",
    description: "Best for individuals or small teams",
    price: { monthly: 29, yearly: 299 },
    features: [
      "Up to 5 seats",
      "Basic knowledge sync",
      "Live chat suggestions",
      "Email support",
    ],
  },
  {
    id: "pricing-plan-pro",
    name: "Pro",
    description: "Best for medium-sized teams",
    featured: true,
    price: { monthly: 49, yearly: 499 },
    features: [
      "Up to 50 seats",
      "Advanced triage & routing",
      "Integrations with Zendesk & Salesforce",
      "SLA & analytics",
    ],
  },
  {
    id: "pricing-plan-entreprise",
    name: "Entreprise",
    description: "Best for large scale enterprises",
    price: "custom",
    features: [
      "Unlimited seats",
      "Dedicated onboarding",
      "On-prem / VPC options",
      "Compliance & SSO",
    ],
  },
];
export function Plans() {
  const price = pricing_plans[1].price;
  const savings = typeof price !== "string" ? calculateYearlySavings(price) : 0;

  return (
    <section className="py-12 px-8 space-y-10">
      <div className="w-4/5 mx-auto text-center space-y-3">
        <h2>
          Flexible Plans for Teams of Any Size
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[47ch]">
          Choose a plan that fits your growth stage — start small, scale
          confidently, and only pay for what delivers real value.
        </p>
      </div>
      <Pricing className="space-y-8">
        <div className="flex items-center justify-center gap-2">
          <span className="text-muted-foreground">Monthly</span>

          <PricingIntervalSwitch />
          <span className="text-muted-foreground">Yearly</span>
          <span className="text-[10px] font-bold uppercase tracking-wide text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
            Save {savings}%
          </span>
        </div>
        <div className="flex flex-wrap justify-start items-start gap-6 ">
          {pricing_plans.map((plan) => {
            return (
              <PricingCard
                key={plan.id}
                className="md:flex-1 flex flex-col p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
              >
                <PricingPackage className="flex-col gap-4 items-start">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.featured && (
                      <Badge className="bg-linear-to-b from-secondary/20 from-5% to-primary to-100% h-6 rounded-full text-xs shadow-[0px_6px_6px_-3px_rgba(0,0,0,0.08),0px_3px_3px_-1.5px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(255,255,255,0.12)_inset,0px_1px_0px_0px_rgba(255,255,255,0.12)_inset]">
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
                    <PricingFeature key={feature}>
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
