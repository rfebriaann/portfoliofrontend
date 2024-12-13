import Image from 'next/image';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const text = useRef(null);
    useEffect(()=> {
        gsap.fromTo(text.current, 1,
            {
                scrollTrigger: {
                    trigger: text.current,
                    start: "180px 150px",
                    end: "bottom 60px",
                    scrub:1,
                    // markers: true
                },
                y: 0
            },
            {
                scrollTrigger: {
                    trigger: text.current,
                    start: "180px 150px",
                    end: "bottom 60px",
                    scrub: 1,
                },
                y: -120
            }
        )
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
                <div ref={text} className='uppercase text-white font-montserrat font-semibold text-xl'>
                    singularity
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <div>
                    <button className='px-5 py-3 rounded-full bg-white text-black font-montserrat font-semibold'>Get in touch</button>
                </div>
                <div className='text-white'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>
                </div>
            </div>
        </div>
    );
}