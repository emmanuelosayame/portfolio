import { m } from "framer-motion";

const AboutMe = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, type: "spring", duration: 3 }}
      className='bg-black/20 backdrop-blur-lg pt-5 pb-5 md:pb-10 px-2 rounded-xl w-full max-w-3xl md:mt-72'>
      <h2 className='w-full text-center p-0 md:p-2 dark:text-neutral-400 text-xl drop-shadow-sm'>
        About <span className='text-green-600 dark:text-green-500'>Me</span>
      </h2>
      <div className='border-b border-b-green-500 mt-2 w-11/12 mx-auto' />
      <div className='flex flex-col py-5 px-2 md:px-20 text-center justify-center items-center'>
        <p className='w-fulltext-gray-500 text-base md:text-xl drop-shadow-xl darktext-neutral-400'>
          I have 2+ solid years of experience building full stack applications,
          I work with the best and most stable technologies in order to achieve
          lightning speeds and highly optimized applicatiobs. I am very
          proficient with the stacks below and I can work even with great
          flexibility.
        </p>
      </div>
    </m.div>
  );
};

export default AboutMe;
