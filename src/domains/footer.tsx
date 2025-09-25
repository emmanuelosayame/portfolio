import { m } from 'framer-motion';

const Footer = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      className='w-full max-w-6xl mx-auto px-4'>
      <div className='apple-glass rounded-2xl p-8 text-center'>
        <p className='apple-text-secondary text-sm md:text-base'>
          &copy; 2024 Emmanuel Osayame. All rights reserved.
        </p>
      </div>
    </m.div>
  );
};

export default Footer;
