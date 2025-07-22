import { m } from 'framer-motion';

const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      className='w-full max-w-5xl mx-auto'>
      <div className='apple-card p-8 md:p-12 space-y-8'>
        <div className='text-center space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold apple-text-primary'>
            Get in <span className='apple-text-accent'>touch</span>
          </h2>

          <div className='w-16 h-0.5 apple-gradient mx-auto rounded-full' />
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          <div className='apple-glass rounded-xl p-6 text-center space-y-4'>
            <h3 className='text-lg font-semibold apple-text-primary'>Email</h3>
            <a
              className='text-base apple-text-secondary hover:apple-text-accent transition-colors'
              href='mailto:emmanuelosayame@gmail.com'>
              emmanuelosayame@gmail.com
            </a>
          </div>

          <div className='apple-glass rounded-xl p-6 text-center space-y-4'>
            <h3 className='text-lg font-semibold apple-text-primary'>
              WhatsApp
            </h3>
            <a
              className='text-base apple-text-secondary hover:apple-text-accent transition-colors'
              href='https://api.whatsapp.com/send?phone=7067266258&text=Hi%2C%20I%20came%20across%20your%20portfolio...'
              rel='noopener noreferrer'>
              Send a message
            </a>
          </div>

          <div className='apple-glass rounded-xl p-6 text-center space-y-4'>
            <h3 className='text-lg font-semibold apple-text-primary'>
              Instagram
            </h3>
            <a
              className='text-base apple-text-secondary hover:apple-text-accent transition-colors'
              href='http://www.instagram.com/lamarxxiv'
              rel='noopener noreferrer'>
              @lamarxxiv
            </a>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Contact;
