import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Projects() {
  const rowsatu = useRef(null);
  const rowdua = useRef(null);
  const rowtiga = useRef(null);
  const rowempat = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      rowsatu.current,
      2,
      {
        scrollTrigger: {
          trigger: rowsatu.current,
          start: "top 300px",
          end: "bottom 300px",
        },
        x: -1440,
      },
      {
        scrollTrigger: {
          trigger: rowsatu.current,
          start: "top 800px",
          end: "bottom 300px",
        },
        x: 0,
      }
    );
    gsap.fromTo(
      rowdua.current,
      2,
      {
        scrollTrigger: {
          trigger: rowdua.current,
          start: "top 300px",
          end: "bottom 300px",
        },
        x: 1440,
      },
      {
        scrollTrigger: {
          trigger: rowdua.current,
          start: "top 800px",
          end: "bottom 300px",
        },
        x: 0,
      }
    );
    gsap.fromTo(
      rowtiga.current,
      2,
      {
        scrollTrigger: {
          trigger: rowtiga.current,
          start: "top 300px",
          end: "bottom 300px",
        },
        x: -1440,
      },
      {
        scrollTrigger: {
          trigger: rowtiga.current,
          start: "top 800px",
          end: "bottom 300px",
        },
        x: 0,
      }
    );
    gsap.fromTo(
      rowempat.current,
      2,
      {
        scrollTrigger: {
          trigger: rowempat.current,
          start: "top 300px",
          end: "bottom 300px",
        },
        x: 1440,
      },
      {
        scrollTrigger: {
          trigger: rowempat.current,
          start: "top 800px",
          end: "bottom 300px",
        },
        x: 0,
      }
    );
  });
  return (
    <div className="relative flex flex-col gap-10 py-20 px-36 h-screen text-white">
      <div className="flex flex-col gap-5 h-full w-full">
        <div ref={rowsatu} className="h-[500px] w-full flex gap-5">
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/4.jpeg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/1.jpeg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/3.jpeg" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div ref={rowdua} className="h-[500px] w-full flex gap-5">
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/4.jpeg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/1.jpeg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/3.jpeg" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div ref={rowtiga} className="h-[500px] w-full flex gap-5">
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/4.jpeg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/1.jpeg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/3.jpeg" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div ref={rowempat} className="h-[500px] w-full flex gap-5">
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/4.jpeg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/1.jpeg" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-full w-1/3 bg-red-500 ">
            <Image src="/habib/3.jpeg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
