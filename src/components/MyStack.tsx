'use client';
import { m } from 'framer-motion';

const MyStack = () => {
  const stackItems = [
    { text: 'React' },
    { text: 'Next.js' },
    { text: 'TypeScript' },
    { text: 'TailwindCSS' },
    { text: 'Node.js' },
    { text: 'MongoDB' },
    { text: 'Prisma' },
    { text: 'Drizzle' },
    { text: 'PostgreSQL' },
    { text: 'Redis' },
    { text: 'Docker' },
    { text: 'AWS' },
    { text: 'Vercel' },
    { text: 'Git' },
    { text: 'Jest' },
    { text: 'Cypress' },
  ];

  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      className='w-full'>
      <div className='flex flex-col w-full min-h-[80vh]'>
        <div className='text-center space-y-1 w-full'>
          <h2 className='text-3xl md:text-3xl font-bold apple-text-primary'>
            My Stack
          </h2>

          <div className='w-4 h-0.5 apple-gradient mx-auto rounded-full' />

          <p className='text-lg apple-text-secondary max-w-4xl mx-auto leading-relaxed'>
            I work with the best and most stable technologies to achieve highly
            optimized applications.
          </p>
        </div>

        <div className='flex gap-4 px-6 overflow-x-auto scrollbar-hide mt-5'>
          {stackItems.map((item, index) => (
            <m.div
              key={index}
              className='apple-glass rounded-xl px-6 py-5 text-center apple-scale-hover whitespace-nowrap'
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{
                scale: 1.08,
                rotateY: 5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.92 }}>
              <div className='text-sm md:text-base font-medium apple-text-primary w-40'>
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
