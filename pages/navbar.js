import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const text = useRef(null);
  const menubtn = useRef(null);
  const menuoverlay = useRef(null);
  const closebtn = useRef(null);
  const menuTimeline = gsap.timeline({ paused: true });
  useEffect(() => {
    gsap.fromTo(
      text.current,
      1,
      {
        scrollTrigger: {
          trigger: text.current,
          start: "180px 150px",
          end: "bottom 60px",
          scrub: 1,
          // markers: true
        },
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: text.current,
          start: "180px 150px",
          end: "bottom 60px",
          scrub: 1,
        },
        y: -120,
      }
    );

    menuTimeline
      .set(menuoverlay.current, { display: "flex" }) // Show menu container
      .fromTo(
        menuoverlay.current,
        { scaleY: 0, transformOrigin: "right top" },
        { scaleY: 1, duration: 0.8, ease: "power4.out" }
      )
      .fromTo(
        menuoverlay.current.querySelectorAll("ul li"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" },
        "-=0.5" // Start earlier
      );

    menubtn.current.addEventListener("click", () => {
      menuTimeline.play();
    });

    closebtn.current.addEventListener("click", () => {
      menuTimeline.reverse();
    });
  });
  return (
    <div className="flex justify-between px-20 py-10 fixed w-full z-50">
      <div className="flex gap-5 items-center">
        <div>
          <Image
            src="/logo.png"
            alt="Deskripsi gambar"
            width={50}
            height={50}
          />
        </div>
        <div
          ref={text}
          className="uppercase text-white font-montserrat font-semibold text-xl"
        >
          singularity
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div>
          <button className="px-5 py-3 rounded-full bg-white text-black font-figtree font-semibold">
            Get in touch
          </button>
        </div>
        <div className="text-white">
          <button ref={menubtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-menu"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8l16 0" />
              <path d="M4 16l16 0" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={menuoverlay}
        class="fixed inset-0 bg-[#1C1D24] flex items-center justify-center z-50 hidden bg-gradient-to-br from-[#1C1D24] to-[#000000]"
      >
        <div class="text-center">
          <ul class="space-y-4 text-2xl font-semibold">
            <li>
              <Link
                href="/"
                class="button font-figtree font-semibold text-5xl text-[#FFF] hover:text-[#ef792a] transition duration-300 "
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/work/works"
                class="button font-figtree font-semibold text-5xl text-[#FFF] hover:text-[#ef792a] transition duration-300"
              >
                <span>Works</span>
              </Link>
            </li>
            <li>
              <a
                href="#services"
                class="button font-figtree font-semibold text-5xl text-[#FFF] hover:text-[#ef792a] transition duration-300"
              >
                <span>Archive</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="button font-figtree font-semibold text-5xl text-[#FFF] hover:text-[#ef792a] transition duration-300"
              >
                <span>Jobs</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="button font-figtree font-semibold text-5xl text-[#FFF] hover:text-[#ef792a] transition duration-300"
              >
                <span>Contact</span>
              </a>
            </li>
            {/* <li>
              <a
                href="#contact"
                class="button font-figtree font-semibold text-5xl text-[#FFF] hover:text-[#ef792a] transition duration-300"
              >
                <span>Kontak</span>
              </a>
            </li> */}
          </ul>
          <div class="flex justify-center">
            <button
              ref={closebtn}
              class="unfold-button fixed z-50 bottom-5 w-24 h-12 rounded-full bg-black text-[#FFF] flex items-center justify-center overflow-hidden shadow-lg"
            >
              <div class="icon flex items-center justify-center absolute inset-0 z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  // class="icon icon-tabler icons-tabler-outline icon-tabler-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </div>
              <span class="unfold-text absolute text-sm font-bold tracking-wide uppercase opacity-0 transform -translate-x-full translate-y-8 z-10 text-white">
                Tutup
              </span>
            </button>
          </div>
          {/* <button id="close-btn" class="fixed bottom-5 bg-red-500 rounded-full hover:bg-red-600">
                Close Menu
            </button> */}
        </div>
      </div>
    </div>
  );
}
