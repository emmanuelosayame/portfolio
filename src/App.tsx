// import "./index.css";
import { useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import MiniHeader from "./components/MiniHeader";
import SkillsBlock from "./components/MyStack";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const headerRef = useRef(null);
  const projectRef = useRef<any>(null);

  const [header, setHeader] = useState(true);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className=''>
      <div className='w-full text-neutral-500 bg-neutral-200 h-full mainbg flex'>
        <MiniHeader
          headerOff={() => setHeader(true)}
          header={header}
          scrollToProjects={scrollToProjects}
        />

        <div className='w-full h-full items-center space-y-28'>
          <InView
            threshold={0.5}
            ref={headerRef}
            onChange={(inView) => {
              setHeader(inView);
            }}
          />
          {/* .. */}
          <div
            className='bg-white bg-opacity-30 backdrop-blur-md mt-28 
            mb-52 p-4 rounded-[150px]
           h-[350px] w-full md:w-8/12 mx-auto'>
            <div className='relative bg-white rounded-[40px] h-full p-7 drop-shadow-md'>
              <div className='text-2xl md:text-5xl flex flex-col items-center justify-center h-full'>
                <h2 className='text-[43px] leading-normal text-center md:text-7xl font-semibold text-red-100'>
                  <span className='text-blue-100'>Front-end</span> Developer
                </h2>
              </div>

              <div
                className='flex flex-col inset-0  absolute mx-auto justify-center items-end
               rounded-[40px] backdrop-blur-[2px]'>
                <div className='flex flex-col  space-y-5 text-center md:text-start mx-auto p-3'>
                  <h2 className='text-4xl md:text-5xl font-semibold text-red-500 drop-shadow-md'>
                    <span className='text-blue-400'>Front-end</span> Developer
                  </h2>
                </div>
              </div>
            </div>
          </div>

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
    </div>
  );
}

export default App;
