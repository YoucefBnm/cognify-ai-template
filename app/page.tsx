import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Plans } from "@/components/sections/plans";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { WhyUs } from "@/components/sections/why-us";
import { Integrations } from "@/components/sections/integrations";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <Integrations />
      <WhyUs />
      <Plans />
      <Footer />
    </>
  );
}
