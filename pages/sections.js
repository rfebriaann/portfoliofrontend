import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Sections() {
    const bg = useRef(null);
    useEffect(()=> {
        gsap.fromTo(bg.current, 3, 
            {
                scrollTrigger: {
                    trigger: bg.current,
                    start: "top 400px",
                    end: "top 300px",
                    // markers: true,
                },
                opacity:0
            },
            {
                scrollTrigger: {
                    trigger: bg.current,
                    start: "top 400px",
                    end: "top 300px",
                },
                opacity: 1
            }
        )
    });
    return (
        <div className="relative h-80 w-full">
            <div className="z-20 absolute flex justify-center items-center w-full h-full">
                <h1 className='text-white font-montserrat font-extrabold uppercase text-[54px] leading-none'>Selected works</h1>
            </div>
            <div className="z-10 absolute w-full h-full bg-black/30"></div>
            <Image
                ref={bg}
                src="/bg8.jpg"
                layout='fill'
                objectFit='cover'
            />
        </div>
    );
}