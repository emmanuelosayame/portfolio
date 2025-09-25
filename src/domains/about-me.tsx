import { m } from 'framer-motion';

const AboutMe = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      className='w-full max-w-4xl mx-auto'>
      <m.div
        className='apple-card p-8 md:p-12 space-y-6'
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}>
        <div className='text-center space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold apple-text-primary'>
            About <span className='apple-text-accent'>Me</span>
          </h2>

          <div className='w-16 h-0.5 apple-gradient mx-auto rounded-full' />

          <p className='text-lg md:text-xl apple-text-secondary leading-relaxed max-w-3xl mx-auto'>
            I'm a passionate full-stack developer with a keen eye for detail and
            a love for creating seamless user experiences. I specialize in
            building modern web applications using cutting-edge technologies.
          </p>

          <p className='text-base md:text-lg apple-text-secondary leading-relaxed max-w-3xl mx-auto'>
            With expertise in React, Node.js, and cloud technologies, I craft
            digital solutions that are both beautiful and functional.
          </p>
        </div>
      </m.div>
    </m.div>
  );
};

export default AboutMe;
