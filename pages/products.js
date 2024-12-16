import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const title = useRef(null);
  const produk = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      title.current,
      1,
      {
        scrollTrigger: {
          trigger: title.current,
          start: "top 600px",
          end: "bottom top",
          // markers:true
        },
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: title.current,
          start: "top 600px",
          end: "bottom top",
        },
        y: 0,
      }
    );

    gsap.fromTo(
      produk.current,
      1,
      {
        scrollTrigger: {
          trigger: produk.current,
          start: "top 800px",
          end: "bottom top",
          //   markers: true,
        },
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: produk.current,
          start: "top 700px",
          end: "bottom top",
        },
        y: 0,
      }
    );
  });
  return (
    <div className="flex flex-col gap-32 py-40 px-40 h-screen">
      <div className="">
        <h1
          ref={title}
          className="text-white w-1/3 font-figtree font-medium text-[44px] leading-none"
        >
          Offering a variety of high-end services
        </h1>
      </div>
      <div ref={produk} className="flex gap-10">
        <div className="w-1/4 flex flex-col gap-8 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-spiral"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 12.057a1.9 1.9 0 0 0 .614 .743c1.06 .713 2.472 .112 3.043 -.919c.839 -1.513 -.022 -3.368 -1.525 -4.08c-2 -.95 -4.371 .154 -5.24 2.086c-1.095 2.432 .29 5.248 2.71 6.246c2.931 1.208 6.283 -.418 7.438 -3.255c1.36 -3.343 -.557 -7.134 -3.896 -8.41c-3.855 -1.474 -8.2 .68 -9.636 4.422c-1.63 4.253 .823 9.024 5.082 10.576c4.778 1.74 10.118 -.941 11.833 -5.59a9.354 9.354 0 0 0 .577 -2.813" />
          </svg>
          <h1 className="text-white font-figtree font-medium text-2xl leading-none">
            Strategy
          </h1>
          <p className="font-figtree text-white text-lg">
            Strategic masterplans and business/concept strategy
          </p>
        </div>
        <div className="w-1/4 flex flex-col gap-8 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-photo-scan"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 8h.01" />
            <path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" />
            <path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" />
            <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
            <path d="M4 16v2a2 2 0 0 0 2 2h2" />
            <path d="M16 4h2a2 2 0 0 1 2 2v2" />
            <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
          </svg>
          <h1 className="text-white font-figtree font-medium text-2xl leading-none">
            Concept
          </h1>
          <p className="font-figtree text-white text-lg">
            Award winning concepts and ideas
          </p>
        </div>
        <div className="w-1/4 flex flex-col gap-8 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
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
          <h1 className="text-white font-figtree font-medium text-2xl leading-none">
            Campaign
          </h1>
          <p className="font-figtree text-white text-lg">
            High quality campaigns that offer an all-in solution
          </p>
        </div>
        <div className="w-1/4 flex flex-col gap-8 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-movie"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 4l0 16" />
            <path d="M16 4l0 16" />
            <path d="M4 8l4 0" />
            <path d="M4 16l4 0" />
            <path d="M4 12l16 0" />
            <path d="M16 8l4 0" />
            <path d="M16 16l4 0" />
          </svg>
          <h1 className="text-white font-figtree font-medium text-2xl leading-none">
            Production
          </h1>
          <p className="font-figtree text-white text-lg">
            Standard of own film production that delivers
          </p>
        </div>
      </div>
    </div>
  );
}
