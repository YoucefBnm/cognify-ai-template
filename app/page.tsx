import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Plans } from "@/components/sections/plans";
import { Process } from "@/components/sections/process";
import { Products } from "@/components/sections/products";

export default function Page() {
return <>
<Header />
<Hero />
<Process />
<Products />
<Features />
<About />
<Plans />
<FAQ />
<Footer />
</>
}