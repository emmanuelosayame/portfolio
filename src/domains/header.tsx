import {
  DownloadSvg,
  GithubSvg,
  LinkedInSvg,
  WhatsappSvg,
} from '@/domains/svgs';
import { m } from 'framer-motion';

const Header = () => {
  return (
    <m.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50'>
      <div className='max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4'>
        {/* Name */}
        <m.h3
          className='text-lg font-semibold text-gray-900'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}>
          Emmanuel
        </m.h3>

        <nav className='flex items-center gap-6'>
          <m.a
            href='https://www.github.com/emmanuelosayame'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <GithubSvg fill='currentColor' />
            <span className='text-xs font-medium hidden md:block'>GitHub</span>
          </m.a>

          <m.a
            href='https://www.linkedin.com/in/emmanuel-osayame-384702227'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <LinkedInSvg fill='currentColor' />
            <span className='text-xs font-medium hidden md:block'>
              LinkedIn
            </span>
          </m.a>

          <m.a
            href='https://api.whatsapp.com/send?phone=7067266258&text=Hi%2C%20I%20came%20across%20your%20portfolio...'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <WhatsappSvg fill='currentColor' />
            <span className='text-xs font-medium hidden md:block'>Contact</span>
          </m.a>

          <m.a
            download
            href={'/Emmanuel Osayame.pdf'}
            className='text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <DownloadSvg fill='currentColor' />
            <span className='text-xs font-medium hidden md:block'>Resume</span>
          </m.a>
        </nav>
      </div>
    </m.header>
  );
};

export default Header;
