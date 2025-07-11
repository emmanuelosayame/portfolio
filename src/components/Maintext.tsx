'use client';
import { m } from 'framer-motion';

const Maintext = () => {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen'>
      <div className='text-center space-y-8'>
        <m.h1
          className='text-sm md:text-base apple-text-secondary font-medium tracking-wide'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          Web app • Mobile app • Backend
        </m.h1>

        <div className='space-y-4'>
          <m.h1
            className='text-3xl sm:text-5xl md:text-6xl font-bold apple-text-primary tracking-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}>
            Full-Stack
          </m.h1>

          <m.h1
            className='text-3xl sm:text-5xl md:text-6xl font-bold apple-gradient-text tracking-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}>
            Developer
          </m.h1>
        </div>

        <m.p
          className='text-lg md:text-xl apple-text-secondary max-w-2xl mx-auto leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}>
          Crafting exceptional digital experiences with modern technologies and
          clean design.
        </m.p>
      </div>
    </div>
  );
};

export default Maintext;
