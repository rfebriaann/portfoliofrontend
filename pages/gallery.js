import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const galerisatu = useRef(null);
  const galeridua = useRef(null);
  const galeritiga = useRef(null);
  const galeriempat = useRef(null);
  const textproject = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textproject.current,
      1,
      {
        scrollTrigger: {
          trigger: textproject.current,
          start: "top 400px",
          end: "bottom 100px",
        },
        opacity: 0,
        y: 40,
      },
      {
        scrollTrigger: {
          trigger: textproject.current,
          start: "top 400px",
          end: "bottom 100px",
        },
        opacity: 1,
        y: 0,
      }
    );
  });

  useEffect(() => {
    gsap.fromTo(
      galerisatu.current,
      1,
      {
        scrollTrigger: {
          trigger: galerisatu.current,
          start: "top 650px",
          end: "bottom 300px",
          //   markers: true,
        },
        opacity: 0,
        x: -1550,
      },
      {
        scrollTrigger: {
          trigger: galerisatu.current,
          start: "top 650px",
          end: "bottom 300px",
          //   markers: true,
        },
        opacity: 1,
        x: 0,
      }
    );
  });

  useEffect(() => {
    gsap.fromTo(
      galeridua.current,
      1,
      {
        scrollTrigger: {
          trigger: galeridua.current,
          start: "top 650px",
          end: "bottom 300px",
        },
        opacity: 0,
        y: -550,
      },
      {
        scrollTrigger: {
          trigger: galeridua.current,
          start: "top 50px",
          end: "bottom 300px",
        },
        opacity: 1,
        y: 0,
      }
    );
  });

  useEffect(() => {
    gsap.fromTo(
      galeritiga.current,
      1,
      {
        scrollTrigger: {
          trigger: galeritiga.current,
          start: "top 800px",
          end: "bottom 300px",
          //   markers: true,
        },
        opacity: 0,
        y: 610,
      },
      {
        scrollTrigger: {
          trigger: galeritiga.current,
          start: "top 1200px",
          end: "bottom 300px",
          //   markers: true,
        },
        opacity: 1,
        y: 0,
      }
    );
  });

  useEffect(() => {
    gsap.fromTo(
      galeriempat.current,
      1,
      {
        scrollTrigger: {
          trigger: galeriempat.current,
          start: "top 650px",
          end: "bottom 300px",
          //   markers: true,
        },
        opacity: 0,
        x: 1550,
      },
      {
        scrollTrigger: {
          trigger: galeriempat.current,
          start: "top 650px",
          end: "bottom 300px",
          //   markers: true,
        },
        opacity: 1,
        x: 0,
      }
    );
  });

  return (
    <div className="flex flex-col gap-10 py-20 px-40 h-screen text-white">
      <div
        ref={textproject}
        className="h-0/5 flex justify-end items-center gap-2"
      >
        <h1 className="font-figtree font-medium text-3xl">
          See all of my projects
        </h1>
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M15 16l4 -4" />
          <path d="M15 8l4 4" />
        </svg>
      </div>
      <div className="h-4/5  flex gap-5">
        <div ref={galerisatu} className="h-full w-[300px] bg-red-500">
          <Image src="/habib/4.jpeg" layout="fill" objectFit="cover" />
        </div>
        <div ref={galeridua} className="h-full w-[300px] bg-red-500">
          <Image src="/habib/1.jpeg" layout="fill" objectFit="cover" />
        </div>
        <div ref={galeritiga} className="h-full w-[300px] bg-red-500">
          <Image src="/habib/3.jpeg" layout="fill" objectFit="cover" />
        </div>
        <div ref={galeriempat} className="h-full w-[300px] bg-red-500">
          <Image src="/habib/2.jpeg" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="relative h-1/5  flex w-full justify-between ">
        <div className="font-figtree font-medium text-[120px]">Our</div>
        <div className="font-figtree font-medium text-[120px]">Gallery</div>
      </div>
    </div>
  );
}
