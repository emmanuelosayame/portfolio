const AboutMe = () => {
  return (
    <div className='bg-black/20 backdrop-blur-lg pt-5 pb-5 md:pb-10 px-2 rounded-xl w-full max-w-3xl mt-96 md:mt-64'>
      <h2 className='w-full text-center p-0 md:p-2 text-white text-xl drop-shadow-sm'>
        About <span className='text-green-500'>Me</span>
      </h2>
      <div className='border-b border-b-green-500 mt-2 w-11/12 mx-auto' />
      <div className='flex flex-col py-5 px-2 md:px-20 text-center justify-center items-center'>
        <p className='w-fulltext-gray-500 text-base md:text-xl drop-shadow-xl text-neutral-400'>
          I have 2+ solid years of experience building full stack applications,
          I work with the best and most stable technologies in order or achieve
          lightning speed and highly optimized applicatiobs. I am very
          proficient with the stacks below and I can work with great
          flexibility.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
