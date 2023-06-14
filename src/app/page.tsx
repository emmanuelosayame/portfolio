"use client";
import AboutMe from "@/components/AboutMe";
import MyStack from "@/components/MyStack";
import Projects from "@/components/Projects";
import { m } from "framer-motion";

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-3 overflow-hidden
     md:p-24 h-full gap-10 md:gap-32 w-full'>
      <div className='z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex'>
        <div
          className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t
         from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://www.delorand.com'
            target='_blank'
            rel='noopener noreferrer'>
            <h3 className='text-red-500 font-bold text-base md:bg-white px-2 py-0.5 md:opacity-30 rounded'>
              delorand
            </h3>
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

        <m.h3
          initial={{ scale: 0.7, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          whileHover={{ scale: 1.2 }}
          className='fixed left-0 top-0 flex w-full justify-center border-b border-green-300 bg-gradient-to-b from-green-200
           p-3 backdrop-blur-2xl dark:border-green-800 dark:bg-green-600 dark:from-inherit lg:static lg:w-auto  
        lg:rounded-xl lg:border lg:bg-green-200 lg:p-4 lg:dark:bg-green-800/30 text-xl font-medium text-green-700'>
          Emmanuel Osayame
        </m.h3>
      </div>

      <div className='pt-64 pb-52 fixed'>
        <div
          className="relative flex flex-col place-items-center justify-center before:absolute before:h-[300px] before:w-[380px] before:-translate-x-1/4 
      before:rounded-full before:bg-gradient-radial before:from-green-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-30 after:h-[180px] after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-100 after:via-green-200 
      after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 
      before:dark:opacity-10 after:dark:from-green-900 after:dark:via-[#3cff01] after:dark:opacity-40 before:lg:h-[360px]">
          <h1
            className='text-xl md:text-xl font-bold center-y whitespace-nowrap z-10 opacity-20 text-green-400
           flex gap-7 md:gap-44'>
            Fast <span className='text-green-200'>Efficient</span>{" "}
            <span className='text-white'>Scallable</span>
          </h1>
          <div className='text-4xl md:text-6xl font-bold MainText text-green-500 text-center z-20 flex gap-3'>
            <m.h1
              initial={{ opacity: 0.5, x: 800 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, type: "spring" }}>
              Front-End
            </m.h1>
            <m.h1
              initial={{ opacity: 0, x: -800 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, type: "spring" }}>
              Developer
            </m.h1>
          </div>
        </div>
      </div>

      <AboutMe />

      <MyStack />

      <Projects />
    </main>
  );
}
