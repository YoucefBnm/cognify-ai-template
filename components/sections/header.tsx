"use client";

import { Logo } from "@/components/logo";
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
} from "@/components/systaliko-ui/animated-menu";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { AudioLinesIcon,  FileTextIcon, MicVocalIcon, UsersIcon } from "lucide-react";
import { Variants } from "motion";
import Link from "next/link";
import React from "react";
import GithubIcon from "../icons/github-icon";
import { Separator } from "../ui/separator";
const nav_links: { id: string; label: string; href: string }[] = [
  {
    id: "nav-link-2",
    label: "Products",
    href: "#Products",
  },
  {
    id: "nav-link-1",
    label: "Docs",
    href: "#docs",
  },
  {
    id: "nav-link-3",
    label: "Solutions",
    href: "#solutions",
  },
  {
    id: "nav-link-4",
    label: "Pricing",
    href: "#pricing",
  },
];

export const nav_socials: { id: string; label: string; href: string }[] = [
  {
    id: "nav-social-link-1",
    label: "IG",
    href: "https://instagram.com/cognify.ai",
  },
  {
    id: "nav-nav-social-link-2",
    label: "Linkedin",
    href: "https://www.linkedin.com/company/cognify-ai/",
  },
  {
    id: "nav-nav-social-link-3",
    label: "X",
    href: "https://www.x.com/cognify-ai/",
  },
];

const variants = {
  open: {
    width: "70vw",
    height: "100vh",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: "0vw",
    height: "100vh",
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;

function useIsScrolled() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const sentinelRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the sentinel (top pixel) is NOT intersecting, we have scrolled down
        setIsScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 1.0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return {
    isScrolled,
    sentinelRef,
  };
}

function HeaderLogo() {
  return (
    <Link className="text-primary flex items-center justify-center" href="/">
      <Logo />
    </Link>
  );
}
function DesktopHeaderNav () {
  return (
    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-2xs">
              <li>
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><div className="bg-chart-2 text-white p-3.5 rounded "><AudioLinesIcon className="size-5" /></div><div><h3 className="font-medium">Voice Generation</h3><p className="text-muted-foreground text-sm">high fidelity audio from text for creators, media, and developers.</p></div></Link>} />
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><div className="bg-accent p-3.5 rounded text-accent-foreground"><MicVocalIcon className="size-5" /></div><div><h3 className="font-medium">Voice Automation</h3><p className="text-muted-foreground text-sm">real time voice conversations for customer service and business.</p></div></Link>} />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-2xs">
              <li>
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><div className="bg-primary text-primary-foreground p-3.5 rounded "><FileTextIcon className="size-5" /></div><div><h3 className="font-medium">Blog</h3><p className="text-muted-foreground text-sm">Latest articles and news from the team.</p></div></Link>} />
                <NavigationMenuLink render={<Link href="#" className="flex-row items-center gap-2"><div className="bg-chart-1 p-3.5 rounded"><UsersIcon className="size-5" /></div><div><h3 className="font-medium">Community</h3><p className="text-muted-foreground text-sm">Discover our community of developers and creators.</p></div></Link>} />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`} render={<Link href="/docs">Docs</Link>} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
function HeaderCta({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex gap-1", className)} {...props}>
      <Button variant="ghost" size="icon"><GithubIcon /></Button>
      <Button>Book a demo</Button>

    </div>
  )
}

function HeaderDesktop() {
  const { isScrolled, sentinelRef } = useIsScrolled();
  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full bg-transparent"
      />
      <header className="sticky z-999 top-0 left-0 w-full flex justify-center">
          <div className={`
            flex justify-between backdrop-blur-lg
            transition-all duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)]
            inset-[0_0_auto] z-999 py-3
            ${isScrolled ? "w-10/12 px-3 translate-y-4 bg-background/50 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" : "w-full px-10"}
            `}>
           
                <HeaderLogo />

               <div className="flex items-center gap-4">
                <DesktopHeaderNav />
                <Separator orientation="vertical" />
                <HeaderCta />
              </div>
          </div>
      </header>
    </>

  );
}
function HeaderMobile() {
  const { isScrolled, sentinelRef } = useIsScrolled();

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full bg-transparent"
      />
      <header
        className={`sticky w-full px-4 z-999 flex items-center gap-4 justify-between bg-background h-14 transition-transform duration-300 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <HeaderLogo />

        <AnimatedMenu className="relative">
          <AnimatedMenuButton className="w-28 h-12 inline-flex justify-center items-center  ">
            <AnimatedMenuButtonToggleIcon className="*:h-[1.5px] *:origin-[17.5%]" />
            <AnimatedMenuButtonLabel />
          </AnimatedMenuButton>
          <AnimatedMenuList
            variants={variants}
            className="fixed top-0 right-0 origin-right z-800 bg-secondary/80 backdrop-blur-lg text-secondary-foreground/50"
          >
            <div className="flex flex-col px-6 justify-evenly gap-6 items-start size-full">
              <div className="flex-col space-y-6 items-start ">
                {nav_links.map(({ id, label, href }, i) => (
                  <AnimatedMenuItem key={id} order={i}>
                    <Link
                      className="text-2xl font-medium transition-colors duration-200 hover:text-secondary-foreground tracking-tight"
                      href={href}
                      title={label}
                      aria-label={`navigate to ${label}`}
                    >
                      {label}
                    </Link>
                  </AnimatedMenuItem>
                ))}
              </div>
              <div className="flex gap-4 ">
                {nav_socials.map(({ id, label, href }, i) => (
                  <AnimatedMenuItem key={id} order={i + nav_links.length}>
                    <Link
                      className=" font-medium text-sm tracking-wide uppercase transition-colors duration-200 hover:text-secondary-foreground"
                      href={href}
                      title={label}
                      aria-label={`navigate to ${label}`}
                    >
                      {label}
                    </Link>
                  </AnimatedMenuItem>
                ))}
              </div>
              <AnimatedMenuItem order={nav_links.length + nav_socials.length}>
                <Button className="z-999 relative">Get Started</Button>
              </AnimatedMenuItem>
            </div>
          </AnimatedMenuList>
        </AnimatedMenu>
      </header>
    </>
  );
}

export function Header() {
  const isMobile = useIsMobile();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}
