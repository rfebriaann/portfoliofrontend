import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
export default function Trusts() {
    const backgroundtrust = useRef(null);
    const trusttext = useRef(null);

    useEffect(()=> {
        gsap.fromTo(backgroundtrust.current, 1,
            {
                scrollTrigger: {
                    trigger: backgroundtrust.current,
                    start: "top bottom",
                    end: "top 200px",
                    // markers: true,
                },
                x:-160,
                ease: "none",
                duration: 3,
            },
            {
                scrollTrigger: {
                    trigger: backgroundtrust.current,
                    start: "top bottom",
                    end: "top 400px",
                    toggleActions: "none pause none pause",
                    scrub: 1,
                    // markers: true,
                },
                x:10,
                ease: "none",
                duration: 3,
            }
        )
    });

    useEffect(()=> {
        gsap.fromTo(trusttext.current, 4,
            {
                scrollTrigger: {
                    trigger: trusttext.current,
                    start: "top bottom",
                    end: "top 200px",
                    // markers: true,
                },
                x:-160,
                ease: "none",
                duration: 3,
            },
            {
                scrollTrigger: {
                    trigger: trusttext.current,
                    start: "top bottom",
                    end: "top 400px",
                    scrub: 1,
                    toggleActions: "restart pause none pause",
                    // markers: true,
                },
                x:0,
                ease: "none",
                duration: 3,
            }
        )
    });
    return (
        <div className="relative flex items-center gap-20 py-40 px-40">
            <div ref={backgroundtrust} className="relative w-2/5 h-[450px] ">
                <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
                <Image
                    src="/bg6.jpg"
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div ref={trusttext} className="relative w-3/5 flex flex-col gap-7">
                <h1 className='text-white font-inter font-medium text-[54px] leading-none'>We believe sports is the most thrilling thing on earth</h1>
                <p className='font-inter text-white text-lg'>We create winning ideas to ignite the most distinctive campaigns in sports. Like no other we know how to find the sweet spots between brands and sports culture, which makes us the specialists in our game.</p>
                <p className='font-inter text-white text-lg'>Our goal is to create talk-worthy and head-turning campaigns with outstanding results. Or as we like to say: Rockets for brands that dare to stand out. Nothing less.</p>
            </div>
        </div>
    );
}