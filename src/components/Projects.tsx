import {
  Box,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import wagwan from "../assets/chatApp.png";
import wagwan2 from "../assets/chatApp2.png";
import themall from "../assets/themall.png";
import themall2 from "../assets/themall2.png";

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
        // p={4}
        bgGradient='linear(to-l,gray,blue.600)'
        bgClip='text'
        size='lg'
        textAlign='center'
        color='blue.600'>
        Some of the things I've built
      </Heading>
      <Stack spacing={5}>
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
            <Heading
              size='lg'
              my={5}
              color='white'
              as={Link}
              href='https://wagwanchat.vercel.app'>
              WagWan Chat App
            </Heading>
            <Text w={["full", "full", "70%"]} fontSize={[16, 18, 20]}>
              A web app for built extensivily with modern web technologies and
              heavily geared towards realtime and offline enabled web
              performance. Login with a google account and you can push and
              recieve those favourite chats with your loved ones at the fly with
              the power or running a native like experience in your browser
              especially with support as a PWA.
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
            <Heading
              size='lg'
              my={5}
              color='white'
              as={Link}
              href='https://themall-one.vercel.app'>
              A complete e-commerce platform
            </Heading>
            <Text w={["full", "full", "70%"]} fontSize={[16, 18, 20]}>
              A uniquely built web platform, featuring 3 applications, the
              customers' appication, the sellers' application and the admin'
              application. Although it's still a work in progress but my goal is
              to create accessible services to customers and have a platform
              built just to handle the e-commerce processes even at a large
              scale.
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Stack>
    // </Box>
  );
};

export default Projects;
