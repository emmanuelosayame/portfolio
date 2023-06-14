"use client";
import AboutMe from "@/components/AboutMe";
import Links from "@/components/Links";
import Maintext from "@/components/Maintext";
import { LeftMetrics, RightMetrics } from "@/components/Metrics";
import MyStack from "@/components/MyStack";
import Projects from "@/components/Projects";
import { m } from "framer-motion";
import { useRef } from "react";
// import resume from "../../public/Emmanuel Osayame.pdf";

export default function Home() {
  const projectRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between px-3 pt-[430px] sm:pt-[650px] md:pt-24 pb-28 md:pb-4 overflow-hidden
      h-full gap-10 md:gap-32 w-full'>
      <LeftMetrics />
      <RightMetrics viewProjects={scrollToProjects} />

      <div className='z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex'>
        <div
          className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t
         from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://www.delorand.com'
            target='_blank'
            rel='noopener noreferrer'>
            <m.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 4, duration: 1.2 }}
              className='text-red-500 font-medium text-sm md:bg-white px-2 py-0.5 md:opacity-30 rounded'>
              delorand
            </m.h3>
            {/* <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className='dark:invert'
              width={100}
              height={24}
              priority
            /> */}
          </a>
        </div>

        <Links />
      </div>

      <Maintext />

      <AboutMe />

      <MyStack />

      <Projects ref={projectRef} />
    </main>
  );
}
