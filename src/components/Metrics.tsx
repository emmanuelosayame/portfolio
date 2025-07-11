import Image from 'next/image';
import { CheckIcon } from './svgs';
import { m } from 'framer-motion';
import Link from 'next/link';

export const LeftMetrics = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', duration: 1, delay: 4.5 }}
      className='fixed hidden md:block left-10 center-y
      w-72 '>
      <m.div
        className='border border-fgColor rounded-md flex p-4 gap-2 flex-col items-center  text-center text-fgColor card-glow'
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
        <h3 className=''>***</h3>
        <p className='text-sm'>Fast and performant applications</p>
        <p className='text-sm'>Adhere to best practices, no cutting corners</p>
        <p className='text-sm'>
          Loads of features, but neccesary and performant.
        </p>

        <p className='text-sm inline-flex'>
          Stability and scalability.
          <span className='inline-flex'>
            <CheckIcon />
          </span>
        </p>
        {/* <button
        className='bg-black py-2 w-full rounded-lg flex justify-center text-white text-sm drop-shadow-md hover:scale-110
         transition-all'>
        View other projects
      </button> */}
      </m.div>
    </m.div>
  );
};
