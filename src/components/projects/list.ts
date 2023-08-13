import radicalxdashboard2 from 'public/radical-x-mobile.webp';
import delorandmobile from 'public/delorand-mobile.webp';
import ewsmobile from 'public/ewsmobile.webp';
import salestrack from 'public/sales-track.webp';
import { StaticImageData } from 'next/image';

export const images: { [key: string]: StaticImageData } = {
  ews: ewsmobile,
  radicalx: radicalxdashboard2,
  delorand: delorandmobile,
  salestrack: salestrack,
};

export const list = [
  {
    id: 'ews',
    webLink: 'https://www.eternalworkspace.com',
    githubLink: 'private',
    title: 'Eternal Workspace',
    gist: 'EWS help people that work remotely become consistently productive by connecting them with nearby/serene locations and a responsive co-working community to get their work done, minimizing procrastination',
    perks: {
      responsiveness: '100%',
      pageInsight: '96%',
      providedDesign: 'true',
      implementationGrade: 'pixel perfect',
      fieldsWorkedOn: 'Back-end, front-end, micro-serv..',
    },
    clientFeedBack: [
      {
        position: 'Founder',
        name: 'Vovwe',
        feedback:
          "An exceptional workspace booking application you've developed for us! It's a game-changer in every sense. The way it effortlessly streamlines our workspace reservations and provides real-time availability information is remarkable. Our team's satisfaction has soared to new heights, thanks to the convenience and efficiency your app brings. Your attention to detail and commitment to delivering a superior user experience shine through brilliantly. Kudos to you for crafting a solution that has left us thoroughly delighted!",
      },
    ],
  },
  {
    id: 'delorand',
    webLink: 'https://www.delorand.com',
    githubLink: 'private',
    title: 'delorand',
    gist: 'An e-commerce platform, specialized in fashion and electronic components. Built in house with typical frontend technologies like Nextjs, mongodb, trpc..., the webapp boasts performance, good optimation, excellent design and over-all proper implementation of frontend technologies.',
    perks: {
      responsiveness: '100%',
      pageInsight: '89%',
      providedDesign: 'false',
      implementationGrade: null,
      fieldsWorkedOn: 'Back-end, front-end, micro-serv..',
    },
    clientFeedBack: [
      {
        position: 'Founder',
        name: 'Lamar',
        feedback:
          'I’m absolutely thrilled with the webapp you built. The smooth browsing, easy checkout, and stunning product presentation exceeded my expectations. Shopping has never been this enjoyable. Kudos on a fantastic job!',
      },
    ],
  },
  {
    id: 'radicalx',
    webLink: 'https://internship-dashboard.vercel.app',
    githubLink: 'https://github.com/emmanuelosayame/internship-dashboard',
    title: 'Radical-X-dashboard',
    gist: 'Companies working with RadicalX want to be able to provide 3-6 months paid apprenticeships to the top talent coming out of the RadicalX internship program. RadicalX apprenticeships enable companies to discover, build and manage a cloud team to work on specific projects on-demand. The idea is that companies will be able to build and onboard an apprenticeship team in days and it  will allow them pay-as-you-go flexibility. In order to do this,  companies need to create an apprenticeship on the RadicalX platform. This web app was designed to allow companies create apprenticeships on the platform.',
    perks: {
      responsiveness: '100%',
      pageInsight: '96%',
      providedDesign: 'true',
      implementationGrade: 'pixel perfect',
      fieldsWorkedOn: 'Front-end, Baas.',
    },
    clientFeedBack: [
      {
        position: 'Ceo',
        name: 'Talha Sabri',
        feedback:
          "The app's innovative approach to bridging the gap between opportunities and talent is impressive. It's clear that your dedication and skill have resulted in a platform that can truly transform the way apprenticeships are established and candidates are evaluated. This project showcases your commitment to making a meaningful impact in the professional world. Great work!",
      },
    ],
  },
  {
    hideBorder: true,
    id: 'salestrack',
    webLink: 'https://emmanuelosayame.delorand.com',
    githubLink: 'https://github.com/emmanuelosayame',
    title: 'Sales Track',
    gist: 'A robust platform to allow companies to automate and keep track of their businesses. The platform ensures to alleviate workloads and prevent uncertainties and loss of records',
    perks: {
      responsiveness: '90%',
      pageInsight: '88%',
      providedDesign: 'true',
      implementationGrade: 'pixel perfect',
      fieldsWorkedOn: 'Front-end',
    },
    clientFeedBack: [
      {
        position: 'CTO',
        name: 'Ilori Waliu',
        feedback:
          "Your contribution to the application is truly commendable! The intuitive interface you've crafted enhances user experience and makes tasks seamless. Your attention to detail in design and functionality is evident, and it's clear that your expertise has played a vital role in creating a visually appealing and user-friendly platform. Your dedication to enhancing how businesses operate through frontend development is impressive. Well done!",
      },
    ],
  },
  // {
  //   id: "wagwan",
  //   webLink: "https://wagwanchat.vercel.app",
  //   githubLink: "https://github.com/emmanuelosayame/chat-app",
  //   title: "WagWan Chat App",
  //   gist: "A fully featured web app built with modern web technologies. The development was geared towards making it realtime and offline enabled. This application was developed with next js, chakraui,firebase and the typical react hooks. In the future I will be adding more features and making it more accessible as a mobile application. Login as a guest or with a google account and you can send and recieve messages with your loved ones on the fly with the power of running a near native experience in your browser especially with support as a PWA for mobile and desktop.",
  // },
];
