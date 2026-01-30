import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Header } from "@/components/sections/header";
import { Process } from "@/components/sections/process";
import { Products } from "@/components/sections/products";

export default function Page() {
return <>
<Header />
<Process />
<Products />
<Features />
<About />
</>
}