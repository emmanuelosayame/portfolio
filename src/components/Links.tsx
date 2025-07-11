import {
  DownloadSvg,
  GithubSvg,
  LinkedInSvg,
  WhatsappSvg,
} from '@/components/svgs';
import { m } from 'framer-motion';

const Links = () => {
  return (
    <m.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4'>
      {/* Name */}
      <m.h3
        className='text-lg font-semibold apple-text-primary'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}>
        Emmanuel Osayame
      </m.h3>

      {/* Social Links */}
      <div className='flex items-center gap-4'>
        <m.a
          href='https://www.github.com/emmanuelosayame'
          target='_blank'
          rel='noopener noreferrer'
          className='apple-glass rounded-full p-3 hover:bg-white/20 transition-all duration-200'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <GithubSvg fill='#ffffff' />
        </m.a>

        <m.a
          href='https://www.linkedin.com/in/emmanuel-osayame-384702227'
          target='_blank'
          rel='noopener noreferrer'
          className='apple-glass rounded-full p-3 hover:bg-white/20 transition-all duration-200'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <LinkedInSvg fill='#ffffff' />
        </m.a>

        <m.a
          href='https://api.whatsapp.com/send?phone=7067266258&text=Hi%2C%20I%20came%20across%20your%20portfolio...'
          target='_blank'
          rel='noopener noreferrer'
          className='apple-glass rounded-full p-3 hover:bg-white/20 transition-all duration-200'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}>
          <WhatsappSvg fill='#ffffff' />
        </m.a>

        <m.a
          download
          href={'/Emmanuel Osayame.pdf'}
          className='apple-glass rounded-full px-4 py-3 hover:bg-white/20 transition-all duration-200 flex items-center gap-2'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <span className='text-sm font-medium apple-text-primary'>Resume</span>
          <DownloadSvg fill='#ffffff' />
        </m.a>
      </div>
    </m.header>
  );
};

export default Links;
