import { m } from "framer-motion";

const Maintext = () => {
  return (
    <div className='top-[270px] sm:top-[350px] md:top-80 fixed'>
      <div
        className="relative flex flex-col place-items-center justify-center before:absolute before:h-[300px] before:w-[380px] before:-translate-x-1/4 
      before:rounded-full before:bg-gradient-radial before:from-green-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-100 after:via-green-200 
      after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 
      before:dark:opacity-10 after:dark:from-green-900 after:dark:via-[#3cff01] after:dark:opacity-40 before:lg:h-[360px]">
        <h1
          className='text-base md:text-lg center-y whitespace-nowrap z-10 opacity-20 dark:text-green-400
           flex gap-7 md:gap-44'>
          Web app <span className='dark:text-green-200'>Mobile app</span>{" "}
          <span className='md:hidden dark:text-green- block'>Backend</span>
          <span className='hidden md:block'>Typical backend</span>
        </h1>
        <div className='text-2xl sm:text-4xl md:text-6xl font-bold MainText text-green-500 text-center flex gap-3 z-10'>
          <m.h1
            className='text-black dark:text-green-500 md:text-green-500'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", delay: 1.2 }}>
            Full-Stack
          </m.h1>
          <m.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", delay: 1.8 }}>
            Developer
          </m.h1>
        </div>
      </div>
    </div>
  );
};

export default Maintext;
