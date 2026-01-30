import { Logo } from "@/components/logo";
import Link from "next/link";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../ui/input-group";
import { Separator } from "../ui/separator";

function SubscribeGroup({...props}: React.ComponentProps<"div">) {
  return (
    <InputGroup {...props}>
        <InputGroupInput placeholder="Enter your email" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant={"default"}>Subscribe</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
  )
}

export function Footer() {
  return <footer className="bg-foreground text-background px-8 py-12 space-y-10">
    <Logo className="w-28" />

    <div className="flex justify-between gap-12 flex-wrap">
      <div className="flex gap-8">
        <div className="flex flex-col space-y-2 text-sm">
          <h4 className="text-muted-foreground">Products</h4>
          <Link className="text-background/80 hover:text-background" href="#">Generate</Link>
          <Link className="text-background/80 hover:text-background" href="#">Automate</Link>
        </div>

        <div className="flex flex-col space-y-2 text-sm">
          <h4 className="text-muted-foreground">Resources</h4>
          <Link className="text-background/80 hover:text-background" href="#">About</Link>
          <Link className="text-background/80 hover:text-background" href="#">Blog</Link>
          <Link className="text-background/80 hover:text-background" href="#">Careers</Link>
          <Link className="text-background/80 hover:text-background" href="#">Community</Link>
        </div>
      </div>

      <div className="space-y-2 self-end">
        <p className="text-sm text-muted-foreground">Get updates on our latest products and resources.</p>
        <SubscribeGroup className="max-w-xs border-none bg-secondary text-secondary-foreground"/>
      </div>
    </div>

    <Separator className="bg-muted-foreground" />
    
    <div className="flex justify-between gap-8 flex-wrap">
      <p className="text-muted-foreground text-sm font-medium"><small>&copy; 2026 Cognify AI. All rights reserved.</small></p>

      <div className="flex gap-2 flex-wrap">
        <Link className="text-background/80 hover:text-background" href="#">Privacy</Link>
        <Link className="text-background/80 hover:text-background" href="#">Terms</Link>
        <Link className="text-background/80 hover:text-background" href="#">Cookies</Link>

        <Separator orientation="vertical"  className="bg-muted-foreground"/>

        <Link target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background" href="https://github.com/YoucefBnm">Github</Link>
        <Link target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background" href="https://github.com/YoucefBnm">Linkedin</Link>
        <Link target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background" href="https://github.com/YoucefBnm">X</Link>
      </div>
    </div>

  </footer>;
}
