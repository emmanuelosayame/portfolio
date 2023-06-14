import {
  DownloadSvg,
  GithubSvg,
  LinkedInSvg,
  WhatsappSvg,
} from "@/components/Svgs";
import { m } from "framer-motion";

const Links = () => {
  return (
    <m.div
      initial={{ scale: 0.7, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1, delay: 0.8 }}
      className='fixed left-0 top-0 flex w-full justify-center border-b border-green-300 bg-gradient-to-b from-green-200
           p-3 backdrop-blur-2xl dark:border-green-800 dark:bg-transparent dark:from-inherit lg:static lg:w-auto  
        lg:rounded-xl lg:border lg:bg-green-200 lg:p-4 lg:dark:bg-green-800/30 text-lg md:text-xl font-medium text-green-700 gap-3'>
      <h3>Emmanuel Osayame</h3>

      <m.a
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        href='https://www.github.com/lykantheog'
        target='_blank'
        rel='noopener noreferrer'>
        <GithubSvg fill='green' />
      </m.a>
      <m.a
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        href='https://www.linkedin.com/in/emmanuel-osayame-384702227'
        target='_blank'
        rel='noopener noreferrer'>
        <LinkedInSvg fill='green' />
      </m.a>
      <m.a
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        target='_blank'
        // href='tel:07067266258'
        href='https://api.whatsapp.com/send?phone=7067266258&text=Hi%2C%20I%20came%20across%20your%20portfolio...'
        rel='noopener noreferrer'>
        <WhatsappSvg fill='green' />
      </m.a>

      <m.a
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        download
        href={"/Emmanuel Osayame.pdf"}
        className='text-xs leading-3 flex flex-col justify-center items-center'>
        <span>resume</span>
        <DownloadSvg />
      </m.a>
    </m.div>
  );
};

export default Links;
