'use client';
import Contact from '../domains/contact';
import Footer from '../domains/footer';
import Header from '../domains/header';
import MainText from '../domains/main-text';
import MyStack from '../domains/my-stack';
import Projects from '../domains/projects';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pt-24 pb-16 overflow-hidden'>
      <Header />

      {/* Scroll-snap container */}
      <div className='w-full snap-container'>
        <div className='space-y-0'>
          {/* Hero Section */}
          <section className='snap-section'>
            <MainText />
          </section>

          {/* My Stack Section */}
          <section className='snap-section'>
            <MyStack />
          </section>

          {/* Projects Section */}
          <section className='snap-section'>
            <Projects />
          </section>

          {/* Contact Section */}
          <section className='snap-section flex flex-col gap-10 pb-20'>
            <Contact />

            <Footer />
          </section>
        </div>
      </div>
    </main>
  );
}
