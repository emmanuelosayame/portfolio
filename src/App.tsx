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
    <Box h='100vh' w='full' bgColor='black'>
      <Box w='full' h='full' position='relative' maxW='1440px' mx='auto'>
        <MiniHeader
          headerOff={headerOff}
          header={header}
          scrollToProjects={scrollToProjects}
        />
        <Stack
          w='full'
          h='full'
          align='center'
          bgColor='black'
          overflowY='auto'
          position='relative'
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
              backgroundColor: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "8px",
              backgroundColor: "gray",
            },
          }}>
          <Flex py={[200]} px={[10, 30, 200]} w='full'>
            <Box
              fontSize={[20, 30, 40]}
              // color='red'
              fontWeight={600}
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
          <InView
            threshold={0.5}
            ref={headerNot}
            onChange={(inView) => {
              setHeader(inView);
            }}
          />
          <Stack
            top={20}
            justify='end'
            align='center'
            rounded='xl'
            position='absolute'
            bgColor='whiteAlpha.50'
            border='2px solid rgba(80,80,80,0.4)'
            borderColor='blue.800'
            backdropFilter='auto'
            w={["full", "80%"]}
            h='30rem'
            p={10}
            backdropBlur='1.2px'>
            <Box w={["full", "full", "50%"]} textAlign='center' p={[2, 4, 5]}>
              <Heading size='xs' textAlign='start' color='white'>
                Hi, <span style={{ color: "gray" }}>my name is</span>
              </Heading>
              <Heading size='xl' my={3} color='blue.600'>
                {" "}
                Emmanuel,
              </Heading>
              <Text color='gray' fontSize={["16", "17", "18"]}>
                you are welcome to my small quarter of the net. It,s a pleasure
                to meet you. I am a full stack + Iot developer based in Nigeria
                and I enjoy creating digital products and experiences.
              </Text>
            </Box>
          </Stack>
          <AboutMe />
          <SkillsBlock />
          <div ref={projectRef} />
          <Projects />
          <Contact />
          <Footer />
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
