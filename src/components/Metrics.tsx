import Image from 'next/image';
import { CheckIcon } from './svgs';
import { m } from 'framer-motion';
import Link from 'next/link';

export const LeftMetrics = () => {
  const floatingElements = [
    {
      text: 'Fast and performant applications',
      position: 'top-32 left-8',
      delay: 0.2,
    },
    {
      text: 'Adhere to best practices',
      position: 'top-64 left-16',
      delay: 0.4,
    },
    {
      text: 'No cutting corners',
      position: 'top-96 left-6',
      delay: 0.6,
    },
    {
      text: 'Loads of features',
      position: 'top-[28rem] left-12',
      delay: 0.8,
    },
    {
      text: 'Necessary and performant',
      position: 'top-[36rem] left-8',
      delay: 1.0,
    },
    {
      text: 'Stability and scalability',
      position: 'top-[44rem] left-14',
      delay: 1.2,
    },
    {
      text: 'Clean code',
      position: 'top-[52rem] left-10',
      delay: 1.4,
    },
    {
      text: 'Modern technologies',
      position: 'top-[60rem] left-16',
      delay: 1.6,
    },
  ];

  return (
    <>
      {floatingElements.map((element, index) => (
        <m.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{
            duration: 0.8,
            delay: element.delay,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={`fixed ${element.position} z-0 pointer-events-none`}>
          <div className='bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200/30'>
            <p className='text-xs text-gray-700 font-medium whitespace-nowrap'>
              {element.text}
            </p>
          </div>
        </m.div>
      ))}
    </>
  );
};
