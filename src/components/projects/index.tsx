import React from 'react';
import { GithubSvg } from '../svgs';
import Image from 'next/image';
import { m } from 'framer-motion';
import { images, list } from './list';

interface Projects {
  image: string;
}

const Projects = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      className='w-full max-w-6xl mx-auto'>
      <div className='apple-card p-8 md:p-12 space-y-12'>
        <div className='text-center space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold apple-text-primary'>
            Some of the things I've{' '}
            <span className='apple-text-accent'>built</span>
          </h2>

          <div className='w-16 h-0.5 apple-gradient mx-auto rounded-full' />
        </div>

        <div className='space-y-16'>
          {list.map((project, index) => (
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              key={project.id}
              className='flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12'>
              <div className='w-full md:w-1/2'>
                <a
                  href={project.webLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block apple-scale-hover'>
                  <Image
                    alt={project.title}
                    width={300}
                    height={541}
                    src={images[project.id]}
                    className={`rounded-2xl shadow-2xl ${
                      project.hideBorder ? '' : 'border border-white/20'
                    } w-full h-auto`}
                  />
                </a>
              </div>

              <div className='w-full md:w-1/2 space-y-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <h3 className='text-2xl md:text-3xl font-bold apple-text-primary'>
                      {project.title}
                    </h3>
                    <a
                      href={project.webLink}
                      className='apple-glass rounded-full p-2 hover:bg-white/20 transition-colors'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        className='w-5 h-5 apple-text-primary'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                        />
                      </svg>
                    </a>
                  </div>

                  {project.githubLink === 'private' ? (
                    <div className='flex flex-col items-center opacity-50'>
                      <GithubSvg />
                      <p className='text-xs apple-text-secondary'>private</p>
                    </div>
                  ) : (
                    <a
                      className='flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity'
                      href={project.githubLink}>
                      <GithubSvg />
                      <p className='text-xs apple-text-secondary'>Github</p>
                    </a>
                  )}
                </div>

                <p className='text-lg apple-text-secondary leading-relaxed'>
                  {project.gist}
                </p>

                <div className='space-y-4'>
                  <h4 className='text-xl font-semibold apple-text-primary border-b border-white/20 pb-2'>
                    Client Feedback
                  </h4>
                  <div className='space-y-4'>
                    {project.clientFeedBack.map((client, index) => (
                      <div key={index} className='apple-glass rounded-xl p-4'>
                        <div className='flex items-center gap-2 mb-2'>
                          <span className='font-medium apple-text-primary'>
                            {client.name}
                          </span>
                          <span className='text-xs apple-glass px-2 py-1 rounded-full'>
                            {client.position}
                          </span>
                        </div>
                        <p className='text-sm apple-text-secondary italic'>
                          "{client.feedback}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default Projects;
