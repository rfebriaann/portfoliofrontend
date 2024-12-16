import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Liquid() {
  const kotaksatu = useRef(null);
  const kotakdua = useRef(null);
  const kotaktiga = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      kotaksatu.current,
      1,
      {
        scrollTrigger: {
          trigger: kotaksatu.current,
          start: "top 600px",
          end: "bottom 100px",
          // markers: true,
          scrub: 1,
        },
        height: 250,
      },
      {
        scrollTrigger: {
          trigger: kotaksatu.current,
          start: "top 600px",
          end: "bottom 200px",
          // markers: true,
          scrub: 1,
        },
        height: 10,
      }
    );

    gsap.fromTo(
      kotakdua.current,
      1,
      {
        scrollTrigger: {
          trigger: kotakdua.current,
          start: "top 600px",
          end: "bottom 100px",
          // markers: true,
          scrub: 1,
        },
        height: 150,
      },
      {
        scrollTrigger: {
          trigger: kotakdua.current,
          start: "top 600px",
          end: "bottom 200px",
          // markers: true,
          scrub: 1,
        },
        height: 10,
      }
    );

    gsap.fromTo(
      kotaktiga.current,
      1,
      {
        scrollTrigger: {
          trigger: kotaktiga.current,
          start: "top top",
          end: "bottom 100px",
          // markers: true,
          scrub: 1,
        },
        height: 100,
      },
      {
        scrollTrigger: {
          trigger: kotaktiga.current,
          start: "top top",
          end: "bottom 200px",
          // markers: true,
          scrub: 1,
        },
        height: 50,
      }
    );
  });
  return (
    <div className="relative flex flex-col gap-5 px-40 py-40">
      <div
        ref={kotaksatu}
        className="relative w-full h-40 rounded-[50px] overflow-hidden"
      >
        <Image src="/liquid/1.jpg" layout="fill" objectFit="cover" />
      </div>
      <div
        ref={kotakdua}
        className="relative w-full h-20 bg-red-500 rounded-[50px] overflow-hidden"
      >
        <Image src="/liquid/2.jpg" layout="fill" objectFit="cover" />
      </div>
      <div
        ref={kotaktiga}
        className="relative w-full h-10 bg-red-500 rounded-[50px] overflow-hidden"
      >
        <Image src="/liquid/3.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
