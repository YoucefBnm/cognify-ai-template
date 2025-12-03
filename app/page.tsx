import { FAQ } from "@/sections/faq";
import { Features } from "@/sections/features";
import { Footer } from "@/sections/footer";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { Plans } from "@/sections/plans";
import { Process } from "@/sections/process";
import { Products } from "@/sections/products";
import { Testimonials } from "@/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-4 border-x">
        <Hero />
        <Process />
        <Products />
        {/* <Features /> */}
        <Plans />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
