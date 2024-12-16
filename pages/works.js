import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function Works() {
  const visualbox = useRef(null);
  const shotbox = useRef(null);
  useEffect(() => {
    gsap.to(visualbox.current, {
      scrollTrigger: {
        trigger: visualbox.current,
        start: "top center",
        end: "top 500px",
        scrub: 1,
        x: -210,
        // markers:true
      },
      y: -160,
      ease: "none",
      duration: 3,
    });
  });

  useEffect(() => {
    gsap.to(shotbox.current, {
      scrollTrigger: {
        trigger: shotbox.current,
        start: "top center",
        end: "top 400px",
        scrub: 1,
        // markers:true
      },
      y: -80,
      ease: "none",
      duration: 3,
    });
  });

  return (
    <div className="relative flex flex-col gap-20 py-40 px-40">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-white w-1/2 font-montserrat font-extrabold uppercase text-[54px] leading-none">
            Selected works
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-box"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
              <path d="M12 12l8 -4.5" />
              <path d="M12 12l0 9" />
              <path d="M12 12l-8 -4.5" />
            </svg>
            <p className="font-figtree text-white text-lg">View all works</p>
          </div>
          <div className="flex gap-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-archive"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
              <path d="M10 12l4 0" />
            </svg>
            <p className="font-figtree text-white text-lg">Explore archive</p>
          </div>
        </div>
      </div>

      <div className="flex gap-7 h-[560px]">
        <div
          ref={visualbox}
          className="relative top-40 w-1/3 h-[500px] bg-orange-400"
        >
          <div className="absolute flex items-center justify-center h-full w-full">
            <Image
              className="z-10"
              src="/sublogo4.png"
              width={50}
              height={50}
            />
          </div>
          <div className="absolute z-20 h-full w-full">
            <p className="absolute bottom-10 left-10 font-figtree text-white text-4xl w-2/3">
              We create the visual.
            </p>
          </div>
          <Image src="/habib/4.jpeg" layout="fill" objectFit="cover" />
        </div>
        <div
          ref={shotbox}
          className="relative top-20 w-1/3 h-[500px] bg-orange-400"
        >
          <div className="absolute flex items-center justify-center h-full w-full">
            <Image
              className="z-10"
              src="/sublogo2.png"
              width={50}
              height={50}
            />
          </div>
          <div className="absolute z-20 h-full w-full">
            <p className="absolute bottom-10 left-10 font-figtree text-white text-4xl w-2/3">
              We shot the thing.
            </p>
          </div>
          <Image src="/habib/1.jpeg" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-1/3 h-[500px] bg-orange-400">
          <div className="absolute flex items-center justify-center h-full w-full">
            <Image
              className="z-10"
              src="/sublogo3.png"
              width={50}
              height={50}
            />
          </div>
          <div className="absolute z-20 h-full w-full">
            <p className="absolute bottom-10 left-10 font-figtree text-white text-4xl w-2/3">
              We build something.
            </p>
          </div>
          <Image src="/habib/2.jpeg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
