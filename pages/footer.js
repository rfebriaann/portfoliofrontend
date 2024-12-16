import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
export default function Footer() {
  const getin = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      getin.current,
      1,
      {
        scrollTrigger: {
          trigger: getin.current,
        },
      },
      {
        scrollTrigger: {
          trigger: getin.current,
        },
      }
    );
  });
  return (
    <div className="flex gap-10 px-40 py-20">
      <div ref={getin} className="w-1/2 text-white font-figtree text-[40px]">
        <h1 className="leading-none">
          Ready to take off? <br />{" "}
          <span className="underline">Get in touch</span>
        </h1>
      </div>
      <div className="w-1/2">
        <div className="flex gap-8 text-white font-figtree">
          <div className="w-1/3 flex flex-col gap-5">
            <div>
              <h3 className="font-semibold text-xl">Sitemap</h3>
            </div>
            <div>
              <p>Home</p>
              <Link href="/work/works">Works</Link>
              <p>Archive</p>
              <p>Jobs</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-5">
            <div>
              <h3 className="font-semibold text-xl">Address</h3>
            </div>
            <div>
              <p>Sarphatikade 14 1017 WV Amsterdam Netherlands</p>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-5">
            <div>
              <h3 className="font-semibold text-xl">Contact</h3>
            </div>
            <div>
              <p>Habibkiting@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
