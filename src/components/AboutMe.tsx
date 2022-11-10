import {
  Box,
  Divider,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Cube2Svg } from "../Svgs";

const AboutMe = () => {
  return (
    <Box bgColor='white' h={["700px", "700px", "600px"]} rounded='3xl' w='full'>
      <Heading
        size='lg'
        w='full'
        textAlign='center'
        p={4}
        bgGradient='linear(to-l,#b19cd9,#cea2fd)'
        bgClip='text'>
        About Me
      </Heading>
      <Stack direction={["column", "column", "row"]} py={10} px={[2, 4, 10]}>
        <Box
          w='full'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'>
          <Text w='full' color='gray' fontSize={[18, 18, 20]}>
            My names are{" "}
            <Text as={"span"} fontSize='inherit' color='#D3CCE3'>
              Emmanuel Osayame
            </Text>
            . I enjoy creating digital contents. I focus on building accessible,
            inclusive products and{" "}
            <Text as={"span"} fontSize='inherit' color='#D3CCE3'>
              I love What I do.
            </Text>
          </Text>

          <Tabs isFitted variant='soft-rounded' pt={[10, 20]}>
            <TabList
              mb='1em'
              // p={[0, 1, 2]}
              _active={{ borderColor: "gray" }}
              fontSize={[18, 18, 20]}>
              <Tab
                px={[1, 2, 3]}
                borderColor='#D3CCE3'
                _selected={{ bgColor: "#D3CCE3", color: "white" }}
                rounded='2xl'
                fontSize={[16, 18, 20]}
                borderWidth={2}
                mx='2'>
                Developer
              </Tab>
              {/* <Tab
                borderColor='blue.400'
                m={1}
                fontSize={[18, 18, 20]}
                borderWidth={3}>
                Engineer
              </Tab> */}
              <Tab
                px={[1, 2, 3]}
                borderColor='#D3CCE3'
                _selected={{ bgColor: "#D3CCE3", color: "white" }}
                rounded='2xl'
                fontSize={[16, 18, 20]}
                borderWidth={2}
                mx='2'>
                Student
              </Tab>
              <Tab
                px={[1, 2, 3]}
                borderColor='#D3CCE3'
                _selected={{ bgColor: "#D3CCE3", color: "white" }}
                rounded='2xl'
                fontSize={[16, 18, 20]}
                borderWidth={2}
                mx='2'>
                Basketball
              </Tab>
            </TabList>

            <TabPanels w='full'>
              <TabPanel>
                <Text fontSize={[18, 18, 20]}>
                  I've been working with major frontend tools over a year now
                  and I have gained a lot of experience in the ecosystem. I am
                  well versed in the aspects of react development including ssr,
                  ssg, csr, components reusablity, state management...
                </Text>
                <Text fontSize={[18, 18, 20]}>
                  I'm also experienced in graphql, backend services like
                  firebase and AWS. I always keep up with the latest
                  technologies and I can quickly adapt
                </Text>
              </TabPanel>

              {/* <TabPanel>
                <Text fontSize={[18, 18, 20]}>
                  I've also been very passionate and experienced in IOT and
                  related Engineering fields. I've built tons of hardware
                  projects using IOT components and C# programming.Fast-forward
                  to today, and I've had production projects, ideas and a medal
                  in a skills and vocational exhibition. My focus these days is
                  bringing to life technology to make innovative inventions.
                </Text>
              </TabPanel> */}

              <TabPanel>
                <Text fontSize={[18, 18, 20]}>
                  I am currently pursuing a Bachelor's degree in Engineering
                  (Mechatronics) in the university of Benin, Edo State. I
                  completed secondary education in Federal Science and Technical
                  College, Yaba, Lagos.
                </Text>
              </TabPanel>
              <TabPanel>
                <Text fontSize={[18, 18, 20]}>
                  I also play basketball 👀. Hit me up with some NBA tips.
                </Text>
                <Text opacity={0} fontSize={[18, 18, 20]}>
                  I also play basketball 👀. I also play basketball 👀. I also
                  play basketball 👀. I also play basketball 👀.
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box
          w='full'
          display={["none", "none", "flex"]}
          justifyContent='center'
          alignItems='center'>
          {/* <Box p={0} bgColor='whiteAlpha.200' rounded='lg'> */}
          <Cube2Svg fill='blue.600' boxSize={[80]} />
          {/* </Box> */}
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutMe;
