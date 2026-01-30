import Link from "next/link";
import { TextWavy } from "../systaliko-ui/text-wavy";
import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from "../systaliko-ui/text-scroll-read";

export function About() {
  return (
    <section className="">
      <div className="px-8 py-16 md:w-3/4 mx-auto">
        <TextScrollRead spaceClass="h-[100px]">
          <TextScrollReadWrap yRange={[0, 100]} className="">
            <Link href="#">
              <TextWavy
                className="text-sm tracking-wide"
                text="Learn more about cognify"
              />
            </Link>
            <br />
            <ClipText className="text-balance text-4xl font-medium leading-normal bg-[linear-gradient(-90deg,rgba(0,0,0,0.05)_50%,rgb(0,0,0)_50%)]">
              Cognify builds AI tools that make knowledge work faster, safer,
              and more helpful. We believe teams should spend time on impact —
              not on searching for answers. Our mission: turn scattered
              documentation and conversations into usable, trusted intelligence.
            </ClipText>
          </TextScrollReadWrap>
        </TextScrollRead>
      </div>
    </section>
  );
}