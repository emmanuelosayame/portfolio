import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import wagwan from "../assets/chatApp.png";
import wagwan2 from "../assets/chatApp2.jpg";
import radicalxdashboard from "../assets/radicalxdashboard.png";
import radicalxdashboard2 from "../assets/radicalxdashboard2.jpg";
import themall from "../assets/themall.png";
import themall2 from "../assets/themall2.jpg";
import { GithubSvg } from "../Svgs";

const Projects = () => {
  return (
    // <Box
    //   bgColor='whiteAlpha.400'
    //   backdropFilter='auto'
    //   backdropBlur='md'
    //   rounded='3xl'
    //   p='2.5'>
    <Stack py={5} px={[2, 4, 10]} bgColor='white' rounded='3xl'>
      <Heading
        pb={4}
        bgGradient='linear(to-l,#b19cd9,#cea2fd)'
        bgClip='text'
        size={["md", "lg"]}
        textAlign='center'>
        Some of the things I've built
      </Heading>
      <Stack spacing={5}>
        <Stack direction={["column", "column", "row"]} align='center' w='full'>
          <Box
            w={["full", "full", "40%"]}
            filter='auto'
            blur='1.5px'
            as={Link}
            href='https://radicalxdashboard.vercel.app'>
            <Image src={radicalxdashboard} rounded='2xl' w={400} mb={2} />
            <Image src={radicalxdashboard2} rounded='2xl' w={400} h={350} />
          </Box>
          <Box w={["full", "full", "60%"]} h='fit-content' p={3}>
            <Flex align='center'>
              <Heading
                size='lg'
                my={5}
                mr='3'
                color='gray'
                as={Link}
                href='https://radicalxdashboard.vercel.app'>
                Radical-X-dashboard
              </Heading>
              <Link
                display='flex'
                flexDirection='column'
                alignItems='center'
                href='https://github.com/TeamTechRadicals/Project1'
                dropShadow='md'>
                <GithubSvg />
                <Text>Github</Text>
              </Link>
            </Flex>
            <Text w={["full", "full", "70%"]} fontSize={[16, 18, 20]}>
              Companies working with RadicalX want to be able to provide 3-6
              months paid apprenticeships to the top talent coming out of the
              RadicalX internship program. RadicalX apprenticeships enable
              companies to discover, build and manage a cloud team to work on
              specific projects on-demand. The idea is that companies will be
              able to build and onboard an apprenticeship team in days and it
              will allow them pay-as-you-go flexibility. In order to do this,
              companies need to create an apprenticeship on the RadicalX
              platform. This web app was designed to allow companies create
              apprenticeships on the platform.
            </Text>
          </Box>
        </Stack>

        <Divider />
        <Stack
          bgColor='whiteAlpha.300'
          p={3}
          rounded='xl'
          direction={["column", "column", "row"]}
          align='center'
          w='full'>
          <Box
            w={["full", "full", "40%"]}
            filter='auto'
            blur='1px'
            as={Link}
            href='https://themall-one.vercel.app'>
            <Image src={themall} rounded='2xl' w={400} mb={2} />
            <Image src={themall2} rounded='2xl' w={400} h={350} />
          </Box>
          <Box w={["full", "full", "60%"]} h='fit-content' p={3}>
            <Flex align='center'>
              <Heading
                size='lg'
                my={5}
                mr='3'
                color='gray'
                as={Link}
                href='https://themall-one.vercel.app'>
                A complete e-commerce platform
              </Heading>{" "}
              <Link
                display='flex'
                flexDirection='column'
                alignItems='center'
                href='https://github.com/biglevvi/themall'
                dropShadow='md'>
                <GithubSvg />
                <Text>Github</Text>
              </Link>
            </Flex>
            <Text w={["full", "full", "70%"]} fontSize={[16, 18, 20]}>
              A uniquely built e-commerce platform, featuring 3 applications,
              the customers' appication, the sellers' application and the
              admin's application. Although it's still a work in progress but my
              goal is to create accessible services to not just customers but
              also sellers and overall handle the e-commerce processes even at a
              large scale.
            </Text>
          </Box>
        </Stack>
        <Divider />
        <Stack direction={["column", "column", "row"]} align='center' w='full'>
          <Box
            w={["full", "full", "40%"]}
            filter='auto'
            blur='1.5px'
            as={Link}
            href='https://wagwanchat.vercel.app'>
            <Image src={wagwan} rounded='2xl' w={400} mb={2} />
            <Image src={wagwan2} rounded='2xl' w={400} h={350} />
          </Box>
          <Box w={["full", "full", "60%"]} h='fit-content' p={3}>
            <Flex align='center'>
              <Heading
                size='lg'
                my={5}
                mr='3'
                color='gray'
                as={Link}
                href='https://wagwanchat.vercel.app'>
                WagWan Chat App
              </Heading>
              <Link
                display='flex'
                flexDirection='column'
                alignItems='center'
                href='https://github.com/biglevvi/chat-app'
                dropShadow='md'>
                <GithubSvg />
                <Text>Github</Text>
              </Link>
            </Flex>
            <Text w={["full", "full", "70%"]} fontSize={[16, 18, 20]}>
              A fully featured web app built with modern web technologies. The
              development was geared towards making it realtime and offline
              enabled. This application was developed with next js, chakraui,
              firebase and the typical react hooks. In the future I will be
              adding more features and making it more accessible as a mobile
              application. Login as a guest or with a google account and you can
              send and recieve messages with your loved ones on the fly with the
              power of running a near native experience in your browser
              especially with support as a PWA for mobile and desktop.
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Stack>
    // </Box>
  );
};

export default Projects;
