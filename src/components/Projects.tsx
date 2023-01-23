import React from "react";

import radicalxdashboard from "../assets/radicalxdashboard.png";
import radicalxdashboard2 from "../assets/radicalxdashboard2.jpg";
import wagwan from "../assets/chatApp.png";
import wagwan2 from "../assets/chatApp2.jpg";
import themall from "../assets/themall.png";
import themall2 from "../assets/themall2.jpg";
import { GithubSvg } from "../Svgs";

interface Images {
  [key: string]: { 1: string; 2: string };
}

interface Projects {
  image: string;
}

const images: Images = {
  radicalx: { 1: radicalxdashboard, 2: radicalxdashboard2 },
  themall: { 1: themall, 2: themall2 },
  wagwan: { 1: wagwan, 2: wagwan2 },
};

const projects = [
  {
    id: "radicalx",
    webLink: "https://internship-dashboard.vercel.app",
    githubLink: "https://github.com/biglevvi/internship-dashboard",
    title: "Radical-X-dashboard",
    gist: "Companies working with RadicalX want to be able to provide 3-6 months paid apprenticeships to the top talent coming out of the RadicalX internship program. RadicalX apprenticeships enable companies to discover, build and manage a cloud team to work on specific projects on-demand. The idea is that companies will be able to build and onboard an apprenticeship team in days and it  will allow them pay-as-you-go flexibility. In order to do this,  companies need to create an apprenticeship on the RadicalX platform. This web app was designed to allow companies create apprenticeships on the platform.",
  },
  {
    id: "themall",
    webLink: "https://themall-one.vercel.app",
    githubLink: "https://github.com/biglevvi/themall",
    title: "A complete e-commerce platform",
    gist: "Companies working with RadicalX want to be able to provide 3-6 months paid apprenticeships to the top talent coming out of the RadicalX internship program. RadicalX apprenticeships enable companies to discover, build and manage a cloud team to work on specific projects on-demand. The idea is that companies will be able to build and onboard an apprenticeship team in days and it  will allow them pay-as-you-go flexibility. In order to do this,  companies need to create an apprenticeship on the RadicalX platform. This web app was designed to allow companies create apprenticeships on the platform.",
  },
  {
    id: "wagwan",
    webLink: "https://wagwanchat.vercel.app",
    githubLink: "https://github.com/biglevvi/chat-app",
    title: "WagWan Chat App",
    gist: "A fully featured web app built with modern web technologies. The development was geared towards making it realtime and offline enabled. This application was developed with next js, chakraui,firebase and the typical react hooks. In the future I will be adding more features and making it more accessible as a mobile application. Login as a guest or with a google account and you can send and recieve messages with your loved ones on the fly with the power of running a near native experience in your browser especially with support as a PWA for mobile and desktop.",
  },
];

const Projects = () => {
  return (
    <div className='py-5 px-2 md:px-10 bg-white rounded-3xl'>
      <h2 className='pb-4 bg-clip-text font-semibold text-center text-xl md:text-2xl text-neutral-400'>
        Some of the things I've built
      </h2>
      <div className='space-y-5'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='flex flex-col md:flex-row items-center w-full'>
            <a className='w-full md:w-5/12 blur-[1px]' href={project.webLink}>
              <img
                src={images[project.id][1]}
                className='rounded-2xl w-[400px] mb-2'
              />
              <img
                src={images[project.id][2]}
                className='rounded-2xl w-[400px] h-[350px]'
              />
            </a>
            <div className='w-full md:w-7/12 h-fit p-3'>
              <div className='flex items-center'>
                <a
                  className='my-5 mr-3 font-semibold text-2xl text-gray-500'
                  href={project.webLink}>
                  {project.title}
                </a>
                <a
                  className='flex flex-col items-center drop-shadow-md'
                  href={project.githubLink}>
                  <GithubSvg />
                  <p>Github</p>
                </a>
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
