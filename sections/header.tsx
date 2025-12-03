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
import { nav_links, nav_socials } from "@/data/nav-links";
import { useIsMobile } from "@/hooks/use-mobile";
import { Variants } from "motion";
import Link from "next/link";
import React from "react";
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
    <Link className="flex items-center justify-center" href="/">
      <Logo />
    </Link>
  );
}
function HeaderDesktop() {
  const { isScrolled, sentinelRef } = useIsScrolled();
  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full bg-transparent"
      />
      <header className="sticky backdrop-blur-lg bg-background/75 z-999 top-0 flex justify-center transition-[top] duration-300 *:duration-300">
        <div className="w-full flex justify-center border-b border-b-border px-4">
          <div className="w-full flex justify-center px-6 border-x border-x-border">
            <div
              className={`transition-[width]  ${
                isScrolled ? " w-10/12" : "w-full"
              }`}
            >
              <div className="flex h-14 items-center justify-between">
                <HeaderLogo />

                <ul className="flex justify-center items-center list-none">
                  {nav_links.map(({ id, label, href }) => (
                    <li
                      key={id}
                      className="cursor-pointer text-sm font-medium transition-colors duration-200 text-primary/60 hover:text-primary tracking-tight"
                    >
                      <a
                        href={href}
                        aria-label={`navigate to ${label}`}
                        className="px-4 py-2"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>

                <Button variant={"outline"}>Get Started</Button>
              </div>
            </div>
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
