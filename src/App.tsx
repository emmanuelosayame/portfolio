import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { InView, useInView } from "react-intersection-observer";
import MiniHeader from "./components/MiniHeader";
import "./index.css";
import SkillsBlock from "./components/MyStack";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const headerNot = useRef(null);
  const projectRef = useRef<any>(null);

  const [header, setHeader] = useState(true);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className='w-full h-full text-gray-500'>
        <MiniHeader
          headerOff={() => setHeader(true)}
          header={header}
          scrollToProjects={scrollToProjects}
        />

        <div className='w-full h-full items-center space-y-28'>
          <div className='bg-white bg-opacity-40 backdrop-blur-md mt-28 mb-52 p-3 rounded-[30px] h-[450px] w-10/12 mx-auto'>
            <div className='relative bg-white rounded-3xl h-full p-4'>
              <div className='flex'>
                <div className='text-2xl md:text-4xl bg-gradient-to-r from-[#FFD8CB] to-[#F9D29D] bg-clip-text'>
                  <Typewriter
                    options={{
                      strings: [
                        "Creating digital experiences...",
                        "Converting ideas into real life products...",
                        "Builing performant applications...",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                {/* <CubeSvg fill='#b19cd9' boxSize={["100", "120", "150"]} /> */}
              </div>

              <div
                className='flex flex-col inset-0 absolute mx-auto justify-center items-end
               rounded-3xl bg-white bg-opacity-50 backdrop-blur-[2px]'>
                <div className='flex flex-col space-y-5 text-center md:text-start w-3/5 mx-auto p-3'>
                  <h2 className='text-3xl font-semibold text-gray-500 font-space-gotesk'>
                    Hi, there "
                  </h2>
                  <h2 className='text-4xl text-blue-500 font-semibold'>
                    I'm <span className='text-6xl'>Emmanuel</span>
                  </h2>
                  <p className='text-gray-500 px-2 text-xl'>
                    you're welcome to my small quarter of the net. It,s a
                    pleasure to meet you.
                    <br /> I'm a front-end developer based in Nigeria and I
                    enjoy creating digital products and experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <InView
            threshold={0.5}
            ref={headerNot}
            onChange={(inView) => {
              setHeader(inView);
            }}
          />
          {/* aboutme */}
          <AboutMe />
          {/* my stack */}
          <SkillsBlock />
          <div ref={projectRef} />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
