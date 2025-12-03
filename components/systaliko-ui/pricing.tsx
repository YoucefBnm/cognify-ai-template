"use client";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { CheckIcon, PlusIcon, XIcon } from "lucide-react";
import React from "react";
import { Price } from "./price";

const pricingCardVariants = cva(
  "group relative border-2 p-6 flex flex-col space-y-6 bg-card transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)]",
  {
    variants: {
      variant: {
        default: "border-border/50 hover:border-border/50 ",
        featured: "border-primary/50 z-2 hover:border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
type PricingInterval = "monthly" | "yearly";
interface PricingDuration {
  monthly: number;
  yearly: number;
}

interface PricingContextValue {
  interval: PricingInterval;
  toggleInterval: () => void;
  savings?: number;
}
const PricingContext = React.createContext<PricingContextValue | undefined>(
  undefined
);
function usePricingContext() {
  const context = React.useContext(PricingContext);
  if (context === undefined) {
    throw new Error("usePricingContext must be used within a PricingProvider");
  }
  return context;
}
export function calculateYearlySavings(pricing: PricingDuration): number {
  const yearlyTotal = pricing.monthly * 12;
  const savings = yearlyTotal - pricing.yearly;
  return Math.round((savings / yearlyTotal) * 100);
}

export function Pricing({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [interval, setInterval] = React.useState<PricingInterval>("monthly");

  const toggleInterval = () => {
    setInterval((prevState) =>
      prevState === "monthly" ? "yearly" : "monthly"
    );
  };
  return (
    <PricingContext.Provider value={{ interval, toggleInterval }}>
      <div {...props} />
    </PricingContext.Provider>
  );
}

export function PricingCard({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof pricingCardVariants>) {
  return (
    <div
      className={cn(pricingCardVariants({ variant, className }))}
      {...props}
    />
  );
}

export function PricingFeature({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)} {...props}>
      <div className="shrink-0 size-5 rounded-full inline-flex items-center justify-center">
        <CheckIcon className="size-3.5" />
      </div>
      {children}
    </div>
  );
}
export function PricingIncludesPrevious({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)} {...props}>
      <div className="shrink-0 size-5 rounded-full inline-flex items-center justify-center">
        <PlusIcon className="size-3.5" />
      </div>
      {children}
    </div>
  );
}
export function PricingExclude({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)} {...props}>
      <div className="shrink-0 size-5 rounded-full inline-flex items-center justify-center">
        <XIcon className="size-3.5" />
      </div>
      {children}
    </div>
  );
}
export function PricingPackage({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}
export function PricingIntervalSwitch({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { interval, toggleInterval } = usePricingContext();
  return (
    // <Switch
    //   className={cn("inline-flex items-center gap-1", className)}
    //   id="yearly-pricing"
    //   onCheckedChange={toggleInterval}
    //   {...props}
    // />
    <button
      onClick={toggleInterval}
      className={cn(
        "relative w-10 h-6 rounded-full p-1 transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2",
        `${interval === "yearly" ? "bg-primary/80" : "bg-muted"}`,
        className
      )}
      {...props}
    >
      <div
        className={`
        size-4 inset-shadow-xs aspect-square rounded-full bg-background shadow-sm
        " ease-[0.34,1.56,0.64,1] duration-300
        ${interval === "yearly" ? "translate-x-4" : "translate-x-0"}
        `}
      />
    </button>
  );
}
interface PricingValueProps extends React.HTMLAttributes<HTMLDivElement> {
  monthlyValue: number;
  yearlyValue: number;
}
export function PricingValue({
  monthlyValue,
  yearlyValue,
  className,
  ...props
}: PricingValueProps) {
  const { interval } = usePricingContext();
  const currentPrice = interval === "monthly" ? monthlyValue : yearlyValue;

  return (
    <Price
      {...props}
      price={{
        amount: currentPrice,
        currency: "USD",
        interval: interval === "monthly" ? "month" : "year",
      }}
      options={{ showDecimals: false }}
      animated={true}
      className={cn(
        "inline-flex gap-1 tracking-tighter items-center text-4xl",
        className
      )}
    >
      <span className="text-muted-foreground text-sm font-normal tracking-normal">
        /{interval === "monthly" ? "per month" : "per year"}
      </span>
    </Price>
  );
}
