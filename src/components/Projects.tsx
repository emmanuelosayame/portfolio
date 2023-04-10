import React from "react";

import radicalxdashboard from "../assets/radicalxdashboard.png";
import radicalxdashboard2 from "../assets/radicalxdashboard2.jpg";
import deloranddesktop from "../assets/image_2023-04-10_180221216.webp";
import delorandmobile from "../assets/delorandmobile.webp";
import ewsdesktop from "../assets/image_2023-04-10_155919460.webp";
import ewsmobile from "../assets/ewsmobile.webp";
import { GithubSvg } from "../Svgs";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface Images {
  [key: string]: { 1: string; 2: string };
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
    gist: "An e-commerce platform, specialized in fashion and electronic components. Built in house with typical frontend technologies like Nextjs, mongodb, trpc..., the webapp boasts performance, good optimation,excellent design and over-all proper implementation of frontend technologies.",
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

const Projects = () => {
  return (
    <div className='py-5 px-2 md:px-10 bg-white rounded-3xl'>
      <h2 className='pb-4 bg-clip-text font-semibold text-center text-xl md:text-2xl text-blue-400'>
        Some of the things I've built
      </h2>
      <div className='space-y-5'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='flex flex-col md:flex-row items-center w-full'>
            <a className='w-full md:w-5/12 blur-[1px]' href={project.webLink}>
              <img
                src={images[project.id][1] || ""}
                className='rounded-2xl w-fit md:w-[400px] h-fit mb-2'
              />
              <img
                src={images[project.id][2]}
                className='rounded-2xl w-fit md:w-[400px] h-fit'
              />
            </a>
            <div className='w-full md:w-7/12 h-fit p-3'>
              <div className='flex items-center gap-5 md:gap-16 my-5'>
                <a
                  className=' flex items-center gap-2 font-semibold text-2xl text-gray-500'
                  href={project.webLink}>
                  {project.title}
                  <ArrowTopRightOnSquareIcon width={30} />
                </a>
                {project.githubLink === "private" ? (
                  <></>
                ) : (
                  <a
                    className='flex flex-col items-center drop-shadow-md'
                    href={project.githubLink}>
                    <GithubSvg />
                    <p>Github</p>
                  </a>
                )}
              </div>
              <p className='w-full md:w-9/12 text-lg'>{project.gist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </Box>
  );
};

export default Projects;
