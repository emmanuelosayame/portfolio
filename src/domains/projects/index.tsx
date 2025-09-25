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
      className='w-full max-w-7xl mx-auto px-4'>
      <div className='space-y-16'>
        <div className='text-center space-y-1'>
          <h2 className='text-2xl md:text-3xl font-bold apple-text-primary'>
            Some of the things I've built
          </h2>
          <div className='w-4 h-0.5 apple-gradient mx-auto rounded-full' />

          <p className='text-lg apple-text-secondary max-w-2xl mx-auto'>
            A showcase of my recent projects and the impact they've had
          </p>
        </div>

        <div className='space-y-24'>
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
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}>
              <div className='w-full lg:w-2/5 flex justify-center'>
                <a
                  href={project.webLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block apple-scale-hover group'>
                  <div className='relative'>
                    <Image
                      alt={project.title}
                      width={280}
                      height={500}
                      src={images[project.id]}
                      className={`rounded-3xl shadow-2xl ${
                        project.hideBorder ? '' : 'border border-white/20'
                      } w-full h-auto max-w-sm transition-transform duration-300 group-hover:scale-105`}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>
                </a>
              </div>

              <div className='w-full lg:w-3/5 space-y-8'>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-2xl md:text-3xl font-semibold apple-text-primary'>
                      {project.title}
                    </h3>
                    <div className='flex items-center gap-3'>
                      <a
                        href={project.webLink}
                        className='apple-glass rounded-full p-3 hover:bg-white/20 transition-all duration-400 hover:scale-110 flex gap-2'>
                        <span>Visit</span>
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

                      {project.githubLink === 'private' ? null : (
                        <a
                          className='flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity'
                          href={project.githubLink}>
                          <GithubSvg />
                          <p className='text-xs apple-text-secondary'>Github</p>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <p className='text-xl apple-text-secondary leading-relaxed'>
                  {project.gist}
                </p>

                <div className='space-y-6'>
                  <h4 className='text-xl font-medium apple-text-primary border-b border-white/20 pb'>
                    Client Feedback
                  </h4>
                  <div className='space-y-2'>
                    {project.clientFeedBack.map((client, clientIndex) => (
                      <m.div
                        key={clientIndex}
                        className='apple-glass rounded-2xl p-5 hover:bg-white/5 transition-colors duration-300'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: clientIndex * 0.1 }}
                        viewport={{ once: true }}>
                        <div className='flex items-center gap-3 mb-3'>
                          <span className='font-semibold apple-text-primary text-lg'>
                            {client.name}
                          </span>
                          <span className='text-sm apple-glass px-3 py-1 rounded-full'>
                            {client.position}
                          </span>
                        </div>
                        <p className='text-base apple-text-secondary italic leading-relaxed'>
                          "{client.feedback}"
                        </p>
                      </m.div>
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
