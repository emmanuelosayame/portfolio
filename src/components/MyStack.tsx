'use client';
import { useState } from 'react';
import { m } from 'framer-motion';
import useMediaQuery from './usemediaquery';

const MyStack = () => {
  const [dragged, setDragged] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const stackItems = [
    { text: 'React', icon: '⚛️' },
    { text: 'Next.js', icon: '▲' },
    { text: 'TypeScript', icon: '📘' },
    { text: 'TailwindCSS', icon: '🎨' },
    { text: 'Node.js', icon: '🟢' },
    { text: 'MongoDB', icon: '🍃' },
    { text: 'Prisma', icon: '🔧' },
    { text: 'Drizzle', icon: '❄️' },
  ];

  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      className='w-full max-w-6xl mx-auto'>
      <div className='apple-card p-8 md:p-12 space-y-8'>
        <div className='text-center space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold apple-text-primary'>
            My <span className='apple-text-accent'>Stack</span>
          </h2>

          <div className='w-16 h-0.5 apple-gradient mx-auto rounded-full' />

          <p className='text-lg md:text-xl apple-text-secondary max-w-3xl mx-auto leading-relaxed'>
            I work with the best and most stable technologies to achieve
            lightning speeds and highly optimized applications.
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {stackItems.map((item, index) => (
            <m.div
              key={index}
              className='apple-glass rounded-xl p-6 text-center space-y-3 apple-scale-hover'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <div className='text-3xl md:text-4xl'>{item.icon}</div>
              <div className='text-sm md:text-base font-medium apple-text-primary'>
                {item.text}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default MyStack;
