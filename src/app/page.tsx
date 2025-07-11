'use client';
import AboutMe from '@/components/aboutme';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Links from '@/components/links';
import Maintext from '@/components/maintext';
import { LeftMetrics } from '@/components/metrics';
import MyStack from '@/components/mystack';
import Testimonials from '@/components/testimonials';
import Projects from '@/components/projects';
import { m } from 'framer-motion';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-4 pt-24 pb-16 overflow-hidden'>
      <LeftMetrics />

      <div className='z-10 w-full max-w-6xl items-center justify-between text-sm lg:flex'>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://www.delorand.com'
            target='_blank'
            rel='noopener noreferrer'>
            <m.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 4, duration: 1.2 }}
              className='apple-text-secondary font-medium text-sm px-2 py-0.5 md:opacity-50 rounded'>
              delorand
            </m.h3>
          </a>
        </div>

        <Links />
      </div>

      <div className='w-full max-w-6xl space-y-32'>
        <Maintext />

        <AboutMe />

        <MyStack />

        <Projects />

        <Testimonials />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}
