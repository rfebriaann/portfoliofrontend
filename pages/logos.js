import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Logos() {
  const logosatu = useRef(null);
  const logodua = useRef(null);
  const logotiga = useRef(null);
  const logoempat = useRef(null);
  const logolima = useRef(null);
  const logoenam = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logosatu.current,
      1,
      {
        scrollTrigger: {
          trigger: logosatu.current,
          start: "top 500px",
          end: "top 300px",
        },
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: logosatu.current,
          start: "top 500px",
          end: "top 300px",
        },
        x: -500,
        opacity: 1,
      }
    ),
      gsap.fromTo(
        logodua.current,
        1,
        {
          scrollTrigger: {
            trigger: logodua.current,
            start: "top 500px",
            end: "top 300px",
          },
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: logodua.current,
            start: "top 500px",
            end: "top 300px",
          },
          x: -300,
          opacity: 1,
        }
      ),
      gsap.fromTo(
        logotiga.current,
        1,
        {
          scrollTrigger: {
            trigger: logotiga.current,
            start: "top 500px",
            end: "top 300px",
          },
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: logotiga.current,
            start: "top 500px",
            end: "top 300px",
          },
          x: -100,
          opacity: 1,
        }
      ),
      gsap.fromTo(
        logoempat.current,
        1,
        {
          scrollTrigger: {
            trigger: logoempat.current,
            start: "top 500px",
            end: "top 300px",
          },
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: logoempat.current,
            start: "top 500px",
            end: "top 300px",
          },
          x: 100,
          opacity: 1,
        }
      ),
      gsap.fromTo(
        logolima.current,
        1,
        {
          scrollTrigger: {
            trigger: logolima.current,
            start: "top 500px",
            end: "top 300px",
          },
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: logolima.current,
            start: "top 500px",
            end: "top 300px",
          },
          x: 300,
          opacity: 1,
        }
      ),
      gsap.fromTo(
        logoenam.current,
        1,
        {
          scrollTrigger: {
            trigger: logoenam.current,
            start: "top 500px",
            end: "top 300px",
          },
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: logoenam.current,
            start: "top 500px",
            end: "top 300px",
          },
          x: 500,
          opacity: 1,
        }
      );
  });
  return (
    <div className="relative flex items-center justify-center gap-36 px-40 py-36">
      <div className="absolute" ref={logosatu}>
        <Image
          className="z-10"
          src="/trustedlogo/1.png"
          width={120}
          height={120}
        />
      </div>
      <div className="absolute" ref={logodua}>
        <Image
          className="z-10"
          src="/trustedlogo/2.png"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute" ref={logotiga}>
        <Image
          className="z-10"
          src="/trustedlogo/3.png"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute" ref={logoempat}>
        <Image
          className="z-10"
          src="/trustedlogo/4.png"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute" ref={logolima}>
        <Image
          className="z-10"
          src="/trustedlogo/5.png"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute" ref={logoenam}>
        <Image
          className="z-10"
          src="/trustedlogo/7.png"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
