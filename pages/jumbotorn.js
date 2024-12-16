import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ExpoScaleEase } from "gsap/dist/EasePack";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ExpoScaleEase, ScrollTrigger);

export default function Jumbotorn() {
  const background = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      background.current,
      60,
      {
        scale: 1,
      },
      {
        scale: 2,
        duration: 6,
        ease: ExpoScaleEase.config(8, 1),
      }
    );

    gsap.fromTo(
      text.current,
      1,
      {
        scrollTrigger: {
          trigger: text.current,
        },
        opacity: 0,
        y: 40,
      },
      {
        scrollTrigger: {
          trigger: text.current,
        },
        opacity: 1,
        y: 0,
      }
    );
  });
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute z-10 h-full w-1/2 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute right-0 z-10 h-full w-1/2 bg-gradient-to-l from-black to-transparent"></div>
      <div ref={text} className="relative h-full z-20 px-40 py-48">
        <h1 className="text-white w-1/2 font-montserrat font-extrabold uppercase text-[96px] leading-none">
          The Creative Agency In Town
        </h1>
        <p className="font-figtree text-white text-lg">
          We create winning ideas to ignite the most distinctive campaigns in
          town.
        </p>
      </div>
      <div className="absolute z-10 bottom-0 right-0 px-32 py-10">
        <Image src="/sublogo1.png" width={50} height={50} />
      </div>
      <Image ref={background} src="/bg.jpg" layout="fill" objectFit="cover" />
    </div>
  );
}
