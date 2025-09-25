'use client';
import Contact from '../domains/contact';
import Footer from '../domains/footer';
import Header from '../domains/header';
import MainText from '../domains/main-text';
import MyStack from '../domains/my-stack';
import Projects from '../domains/projects';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between overflow-hidden'>
      <Header />

      <div className='w-full snap-container px-5'>
        <section className='snap-section'>
          <MainText />
        </section>

        <section className='snap-section'>
          <MyStack />
        </section>

        <section className='snap-section'>
          <Projects />
        </section>

        <section className='snap-section flex flex-col gap-5'>
          <Contact />

          <Footer />
        </section>
      </div>
    </main>
  );
}
