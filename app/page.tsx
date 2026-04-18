import { SocialProof } from "@/components/sections/social-proof";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Plans } from "@/components/sections/plans";
import { Process } from "@/components/sections/process";
import { Products } from "@/components/sections/products";
import clsx from "clsx";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <main
        className={clsx(
          "relative",
          "before:absolute before:pointer-events-none before:-z-1 before:left-1/2 before:w-full before:inset-y-0 before:max-w-7xl before:border-x before:border-dashed before:border-border before:-translate-x-1/2",
          "after:absolute after:pointer-events-none after:-z-1 after:border-x after:inset-y-0 after:w-full after:max-w-6xl after:-translate-x-1/2 after:left-1/2 after:border-border",
        )}
      >
        <Process />
        <Products />
        <Features />
        <SocialProof />
        <Plans />
      </main>

      <Footer />
    </>
  );
}
