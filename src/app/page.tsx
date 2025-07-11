'use client';
import AboutMe from '@/components/aboutme';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/links';
import Maintext from '@/components/maintext';
import MyStack from '@/components/mystack';
import Testimonials from '@/components/testimonials';
import Projects from '@/components/projects';
import { m } from 'framer-motion';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pt-24 pb-16 overflow-hidden'>
      <Header />

      {/* Scroll-snap container */}
      <div className='w-full snap-container'>
        <div className='space-y-0'>
          {/* Hero Section */}
          <section className='snap-section'>
            <Maintext />
          </section>

          {/* My Stack Section */}
          <section className='snap-section'>
            <MyStack />
          </section>

          {/* Projects Section */}
          <section className='snap-section'>
            <Projects />
          </section>

          {/* Testimonials Section */}
          <section className='snap-section'>
            <Testimonials />
          </section>

          {/* Contact Section */}
          <section className='snap-section'>
            <Contact />
          </section>

          {/* Footer Section */}
          <section className='snap-section'>
            <Footer />
          </section>
        </div>
      </div>
    </main>
  );
}
