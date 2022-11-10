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

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Box w='full' h='full' maxW='1600px' mx='auto'>
        <MiniHeader
          headerOff={() => setHeader(true)}
          header={header}
          scrollToProjects={scrollToProjects}
        />

        <Stack w='full' h='full' align='center'>
          <Box
            bgColor='whiteAlpha.400'
            backdropFilter='auto'
            backdropBlur='md'
            mt={[90]}
            mb='50'
            // mx='3'
            h={["450px", "550px"]}
            w={["full", "full", "80%"]}
            rounded='30px'
            p='3'>
            <Stack
              // justify='center'
              position='relative'
              bgColor='white'
              boxShadow='sm'
              rounded='3xl'
              h='full'
              p='4'
              mx='auto'>
              <Flex>
                <Box
                  fontSize={[25, 30, 40]}
                  fontWeight={600}
                  bgGradient='linear(to-l,#b19cd9,#cea2fd)'
                  bgClip='text'>
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
                </Box>
                {/* <CubeSvg fill='#b19cd9' boxSize={["100", "120", "150"]} /> */}
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
                  textAlign={["center", "center", "unset"]}
                  p={[2, 4, 5]}>
                  <Heading size='lg' pl='5' textAlign='start' color='gray.500'>
                    Hi, there "
                  </Heading>
                  <Flex align='center'>
                    <Heading mx='2' color='#cea2fd'>
                      I'm
                    </Heading>
                    <Heading size='3xl' my={3} color='#b19cd9'>
                      Emmanuel,
                    </Heading>
                  </Flex>
                  <Text color='gray' px='2' fontSize={["18", "18", "22"]}>
                    you're welcome to my small quarter of the net. It,s a
                    pleasure to meet you.
                    <br /> I'm a front-end developer based in Nigeria and I
                    enjoy creating digital products and experiences.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
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
        </Stack>
      </Box>
    </>
  );
}

export default App;
