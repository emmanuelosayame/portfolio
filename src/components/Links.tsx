import React from "react";
import { GithubSvg, WhatsappSvg, LinkedInSvg, SvgInstagram } from "../Svgs";

const Links = () => {
  return (
    <div className='fixed left-4 bottom-4 w-fit h-fit p-2 z-10 bg-white backdrop-blur-md bg-opacity-40 rounded-2xl'>
      <div className='bg-white rounded-xl px-1 py-2 drop-shadow-md'>
        <a href='https://github.com/biglevvi'>
          <GithubSvg />
        </a>
        <a href='https://www.linkedin.com/in/emmanuel-osayame-384702227'>
          <LinkedInSvg className='my-1.5' />
        </a>
        <a href='http://wa.me/07067266258'>
          <WhatsappSvg />
        </a>
      </div>
    </div>
  );
};

export default Links;
