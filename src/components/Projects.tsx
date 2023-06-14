"use client";

import React, { forwardRef } from "react";
import radicalxdashboard from "public/radicalxdashboard.png";
import radicalxdashboard2 from "public/radicalxdashboard2.jpg";
import deloranddesktop from "public/image_2023-04-10_180221216.webp";
import delorandmobile from "public/delorandmobile.webp";
import ewsdesktop from "public/image_2023-04-10_155919460.webp";
import ewsmobile from "public/ewsmobile.webp";
import { GithubSvg } from "../components/Svgs";
import Image, { StaticImageData } from "next/image";
import { m } from "framer-motion";

interface Images {
  [key: string]: { 1: string | StaticImageData; 2: string | StaticImageData };
}

interface Projects {
  image: string;
}

const images: Images = {
  ews: { 1: ewsdesktop, 2: ewsmobile },
  radicalx: { 1: radicalxdashboard, 2: radicalxdashboard2 },
  delorand: { 1: deloranddesktop, 2: delorandmobile },
};

// const images = [
//   { id: "radicalx", url1: radicalxdashboard, url2: radicalxdashboard2 },
//   { id: "delorand", url1: radicalxdashboard, url2: radicalxdashboard2 },
//   { id: "wagwan", url1: radicalxdashboard, url2: radicalxdashboard2 },
// ];

const projects = [
  {
    id: "ews",
    webLink: "https://www.eternalworkspace.com",
    githubLink: "private",
    title: "Eternal Workspace",
    gist: "EWS help people that work remotely become consistently productive by connecting them with nearby/serene locations and a responsive co-working community to get their work done, minimizing procrastination",
  },
  {
    id: "delorand",
    webLink: "https://www.delorand.com",
    githubLink: "private",
    title: "delorand",
    gist: "An e-commerce platform, specialized in fashion and electronic components. Built in house with typical frontend technologies like Nextjs, mongodb, trpc..., the webapp boasts performance, good optimation, excellent design and over-all proper implementation of frontend technologies.",
  },
  {
    id: "radicalx",
    webLink: "https://internship-dashboard.vercel.app",
    githubLink: "https://github.com/bigpoole/internship-dashboard",
    title: "Radical-X-dashboard",
    gist: "Companies working with RadicalX want to be able to provide 3-6 months paid apprenticeships to the top talent coming out of the RadicalX internship program. RadicalX apprenticeships enable companies to discover, build and manage a cloud team to work on specific projects on-demand. The idea is that companies will be able to build and onboard an apprenticeship team in days and it  will allow them pay-as-you-go flexibility. In order to do this,  companies need to create an apprenticeship on the RadicalX platform. This web app was designed to allow companies create apprenticeships on the platform.",
  },
  // {
  //   id: "wagwan",
  //   webLink: "https://wagwanchat.vercel.app",
  //   githubLink: "https://github.com/bigpoole/chat-app",
  //   title: "WagWan Chat App",
  //   gist: "A fully featured web app built with modern web technologies. The development was geared towards making it realtime and offline enabled. This application was developed with next js, chakraui,firebase and the typical react hooks. In the future I will be adding more features and making it more accessible as a mobile application. Login as a guest or with a google account and you can send and recieve messages with your loved ones on the fly with the power of running a near native experience in your browser especially with support as a PWA for mobile and desktop.",
  // },
];

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className='py-5 px-2 md:px-10 bg-black/20 backdrop-blur-lg rounded-3xl'>
      <h2 className=' text-center text-xl md:text-2xl text-green-500 font-medium'>
        Some of the things I've built
      </h2>
      <div className='border-b border-b-green-500 mt-2 mb-10 w-[95%] md:w-11/12 mx-auto' />
      <div className='space-y-36 w-full'>
        {projects.map((project) => (
          <m.div
            initial={{ scale: 0.7, opacity: 0, y: 100 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            transition={{ type: "spring", duration: 0.6 }}
            key={project.id}
            className='flex flex-col-reverse md:flex-row items-center w-full md:w-2/3 mx-auto gap-10 h-auto'>
            <div className='flex flex-col w-full md:w-2/3'>
              <m.a
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileFocus={{ scale: 0.8 }}
                transition={{ type: "spring", duration: 0.9 }}
                href={project.webLink}
                target='_blank'
                rel='noopener noreferrer'>
                <Image
                  alt=''
                  width={650}
                  height={650}
                  src={images[project.id][1] || ""}
                  className='rounded-2xl border-4 border-green-600/80 w-auto h-fit mb-2'
                />
              </m.a>
              <div className='w-full h-fit p-7'>
                <div className='flex items-center justify-between gap-5 md:gap-16 my-5'>
                  <m.a
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileFocus={{ scale: 0.8 }}
                    transition={{ type: "spring", duration: 1.7 }}
                    className=' flex items-center gap-2 font-semibold text-2xl text-green-600'
                    href={project.webLink}>
                    {project.title}
                    {/* <ArrowTopRightOnSquareIcon width={30} /> */}
                  </m.a>
                  {project.githubLink === "private" ? (
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
                <p className='w-full text-center text-lg text-neutral-400'>
                  {project.gist}
                </p>
              </div>
            </div>
            <m.a
              initial={{ scale: 0.5, opacity: 0, y: 170 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1 }}
              whileHover={{ scale: 1.1 }}
              whileFocus={{ scale: 0.8 }}
              viewport={{ amount: "some" }}
              href={project.webLink}
              className='w-full md:w-1/3 h-full'>
              <Image
                alt=''
                width={250}
                height={541}
                src={images[project.id][2]}
                className='rounded-3xl border-4 border-green-600/80 w-auto mx-auto h-auto'
              />
            </m.a>
          </m.div>
        ))}
      </div>
    </div>
    // </Box>
  );
});

export default Projects;
