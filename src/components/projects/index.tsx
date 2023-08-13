'use client';

import React, { forwardRef } from 'react';
import { GithubSvg } from '../Svgs';
import Image from 'next/image';
import { m } from 'framer-motion';
import { images, list } from './list';

interface Projects {
  image: string;
}

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className='py-5 px-2 md:px-10 bg-black/20 backdrop-blur-lg rounded-3xl'>
      <h2 className=' text-center text-xl md:text-2xl text-green-500 font-medium'>
        Some of the things I've built
      </h2>
      <div className='border-b border-b-green-500 my-2  md:mb-10 w-[95%] md:w-11/12 mx-auto' />
      <div className='space-y-10 md:space-y-24 w-full'>
        {list.map((project) => (
          <m.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            transition={{ type: 'spring', duration: 0.6 }}
            key={project.id}
            className='flex flex-col-reverse md:flex-row items-center w-full md:w-3/5 mx-auto gap-2 h-auto'>
            <a
              href={project.webLink}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full md:w-1/3 h-full hover:scale-105 transition-all'>
              <Image
                alt=''
                width={300}
                height={541}
                src={images[project.id]}
                className={`rounded-3xl ${
                  project.hideBorder ? '' : 'border-4 border-green-600/80'
                } w-auto md:w-10/12 mx-auto h-auto`}
              />
            </a>

            <div className='flex flex-col gap-3 w-full md:w-2/3 h-fit p-4 dark:text-neutral-300'>
              <div className='flex items-center justify-between gap-5 md:gap-16 my-5'>
                <div className='flex gap-3 items-center text-green-600'>
                  <p className=' flex items-center gap-2 font-semibold text-xl md:text-2xl'>
                    {project.title}
                  </p>
                  <a
                    href={project.webLink}
                    className='rounded-full p-2 hover:bg-green-600/30'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2.5'
                      stroke='currentColor'
                      className='w-6 h-6'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                      />
                    </svg>
                  </a>
                </div>
                {project.githubLink === 'private' ? (
                  <div className='flex flex-col items-center drop-shadow-md opacity-50 text-sm'>
                    <GithubSvg />
                    <p>private</p>
                  </div>
                ) : (
                  <a
                    className='flex flex-col items-center drop-shadow-md opacity-50 text-sm'
                    href={project.githubLink}>
                    <GithubSvg />
                    <p>Github</p>
                  </a>
                )}
              </div>
              <p className='w-full'>{project.gist}</p>
              <div className=''>
                <h4 className='text-xl font-medium text-green-600 border-b border-b-green-600'>
                  Perks
                </h4>
                <div className='flex justify-between items-center'>
                  <p>Responsiveness</p>
                  <p className='text-green-600'>
                    {project.perks.responsiveness}
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Pages Insight (metrics)</p>
                  <p className='text-green-600'>{project.perks.pageInsight}</p>
                </div>

                <div className='flex justify-between items-center'>
                  <p>Provided designs</p>
                  <p className='text-green-600'>
                    {project.perks.providedDesign}
                  </p>
                </div>

                {project.perks.implementationGrade && (
                  <div className='flex justify-between items-center'>
                    <p>Implementation grade</p>
                    <p className='text-green-600'>
                      {project.perks.implementationGrade}
                    </p>
                  </div>
                )}

                <div className='flex justify-between items-center'>
                  <p>Fields worked-on</p>
                  <p className='text-green-600 w-1/2 text-sm md:text-base text-end'>
                    {project.perks.fieldsWorkedOn}
                  </p>
                </div>
              </div>

              <div className=''>
                <h4 className='text-xl font-medium text-green-600 border-b border-b-green-600'>
                  Client Feedback
                </h4>

                {project.clientFeedBack.map((client, index) => (
                  <div key={index} className=''>
                    <p className='flex gap-2 items-center mt-4'>
                      {client.name}
                      <span className='text-[10px] bg-neutral-500 px-1 rounded'>
                        {client.position}
                      </span>
                    </p>
                    <p className='text-sm'>"{client.feedback}"</p>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </div>
    // </Box>
  );
});

export default Projects;
