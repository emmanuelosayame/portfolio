'use client';
import { m, Variants } from 'framer-motion';

const MyStack = () => {
  const stackItems = [
    { text: 'React' },
    { text: 'Next.js' },
    { text: 'Javascript, TypeScript' },
    { text: 'TailwindCSS' },
    { text: 'Node.js, Bun' },
    { text: 'MongoDB' },
    { text: 'Drizzle, Prisma' },
    { text: 'Drizzle' },
    { text: 'Postgres' },
    { text: 'Redis' },
    { text: 'Docker' },
    { text: 'AWS, Azure, Google cloud' },
    { text: 'Vercel, Netlify' },
    { text: 'Git' },
    { text: 'Redux, RTK' },
    { text: 'Zustand' },
    { text: 'Astro, Remix' },
    { text: 'Hono' },
    { text: 'Express' },
    { text: 'AI & ML' },
    { text: 'Ollama' },
    { text: 'Zod' },
    { text: 'Motion' },
    { text: 'Sentry' },
    { text: 'Firebase, Supabase' },
  ];

  // Parent container handles stagger
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Each child
  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100, // softer spring
        damping: 22, // more damping = smoother stop
        mass: 0.8,
      },
    },
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }} // ease-in-out cubic-bezier
      viewport={{ once: true }}
      className='w-full'>
      <div className='flex flex-col w-full min-h-[80vh]'>
        <div className='text-center space-y-1 w-full'>
          <h2 className='text-3xl md:text-3xl font-bold apple-text-primary'>
            My Stack
          </h2>

          <div className='w-4 h-0.5 apple-gradient mx-auto rounded-full' />

          <p className='text-lg apple-text-secondary max-w-4xl mx-auto leading-relaxed'>
            I work with the best and most stable technologies to build highly
            optimized applications.
          </p>
        </div>

        {/* Parent with staggered children */}
        <m.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
          className='grid grid-cols-2 md:grid-cols-5 gap-4 px-1.5 md:px-6 mt-10 w-full max-w-[1400px] mx-auto'>
          {stackItems.map((itemData, index) => (
            <m.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.07,
                y: -4,
                transition: { type: 'spring', stiffness: 180, damping: 14 },
              }}
              whileTap={{ scale: 0.95 }}
              className='apple-glass rounded-full px-6 py-5 md:py-7 text-center whitespace-nowrap'>
              <div className='text-sm md:text-base font-medium apple-text-primary text-center truncate'>
                {itemData.text}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </m.div>
  );
};

export default MyStack;
