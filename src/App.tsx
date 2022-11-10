import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { InView, useInView } from "react-intersection-observer";
import { CodeSvg, Cube2Svg, Cube3Svg, CubeSvg, SvgInstagram } from "./Svgs";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import MiniHeader from "./components/MiniHeader";
import "./index.css";
import SkillsBlock from "./components/MyStack";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Links from "./components/Links";

function App() {
  const headerNot = useRef(null);
  const projectRef = useRef<any>(null);

  const [header, setHeader] = useState(true);

  const headerOff = () => {
    setHeader(true);
  };

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  // console.log(header);

  return (
    <>
      <Box w='full' h='full' maxW='1600px' mx='auto'>
        <MiniHeader
          headerOff={headerOff}
          header={header}
          scrollToProjects={scrollToProjects}
        />

        <Links />

        <Stack w='full' h='full' align='center'>
          <Box
            bgColor='whiteAlpha.400'
            backdropFilter='auto'
            backdropBlur='md'
            my={[70]}
            h='550px'
            w={["full", "full", "80%"]}
            rounded='3xl'
            p='3'>
            <Stack
              // justify='center'
              position='relative'
              bgColor='white'
              rounded='2xl'
              h='full'
              p='4'
              mx='auto'>
              <Flex>
                <Box
                  fontSize={[20, 30, 40]}
                  fontWeight={500}
                  bgGradient='linear(to-r,gray,whiteAlpha.500,blue.200,blue.400,blue.600)'
                  bgClip='text'>
                  <Typewriter
                    options={{
                      strings: [
                        "Making the unimagineable possible",
                        "Turning ideas into real life products",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Box>
                <CubeSvg fill='blue.500' boxSize={["100", "120", "150"]} />
              </Flex>

              <Stack
                position='absolute'
                top={0}
                // w={["full", "80%"]}
                bottom='0'
                right='0'
                left='0'
                mx='auto'
                justify='center'
                align='end'
                rounded='2xl'
                bgColor='whiteAlpha.500'
                backdropFilter='auto'
                // h='30rem'
                backdropBlur='2px'>
                <Stack
                  w={["full", "full", "75%"]}
                  spacing='5'
                  // textAlign='center'
                  p={[2, 4, 5]}>
                  <Heading size='lg' textAlign='start' color='gray'>
                    Hi, there "
                  </Heading>
                  <Flex>
                    <Heading mr='2' color='wheat'>
                      I'm
                    </Heading>
                    <Heading size='3xl' my={3} color='blue.300'>
                      Emmanuel,
                    </Heading>
                  </Flex>
                  <Text color='gray' fontSize={["16", "17", "22"]}>
                    you're welcome to my small quarter of the net. It,s a
                    pleasure to meet you.
                    <br /> I'm a front-end developer based in Nigeria and I
                    enjoy creating digital products and experiences.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
          {/* aboutme */}
          <AboutMe />
          {/* my stack */}
          <SkillsBlock />
          <div ref={projectRef} />
          <Projects />
          <Contact />
          <Footer />
        </Stack>
        <InView
          threshold={0.5}
          ref={headerNot}
          onChange={(inView) => {
            setHeader(inView);
          }}
        />
      </Box>
    </>
  );
}

export default App;
