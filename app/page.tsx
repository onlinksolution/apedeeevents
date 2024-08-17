'use client'

import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import Story from "./components/Story";
import Team from "./components/Team";
import Event from "./components/Event";
import Partners from "./components/Partners";

import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <main className="overflow-x-hidden">
      <section>
        <div className="absolute z-30 w-full h-screen text-center flex flex-col gap-10 justify-center items-center">
          <h2 className="text-5xl px-5 !leading-snug text-white uppercase font-600 lg:text-6xl">Turning Visions into <br /><span className="bg-yellow text-black">Unforgettable</span> Events</h2>

          <Link href="#welcome" className="animate-bounce">
            <BsArrowDown className="text-black bg-white rounded-full p-3" size={40} />
          </Link>

        </div>
        <div className="w-full h-full bg-black/50 absolute"></div>
        <Image width={0} height={0} sizes="100vw" src="/hero.jpg" alt="hero-img" className="w-full h-screen object-cover object-center" />
      </section>

      <section id="welcome">
        <div>
          <div className="grid absolute z-30 justify-center items-center w-full h-full">
            <div className="">
              <div className="w-full grid justify-center" data-aos="zoom-in">
                <Image width={0} height={0} sizes="100vw" alt="welcome" src="/welcome-text.png" className="mdnav:w-80 md:w-full max-w-lg" />
              </div>
              <p className="text-slate-300 text-center text-balance max-w-2xl px-10 md:py-0" data-aos="zoom-in">Welcome to Ape Dee Events UK, where unforgettable musical experiences come to life! Whether you're planning an intimate gathering or a grand celebration, we're here to turn your vision into reality. At Ape Dee Events, your music, your vibe, and your event are our top priorities. Let's make it extraordinary!</p>
            </div>
          </div>
          <div className="w-full h-full bg-black/50 absolute"></div>
          <Image width={0} height={0} sizes="100vw" src="/welcome.jpg" className="w-full h-screen object-cover object-center" alt="welcome-img" />
        </div>
      </section>

      <Story />
      <Team />
      <Event />
      <Partners />

    </main>
  );
}
