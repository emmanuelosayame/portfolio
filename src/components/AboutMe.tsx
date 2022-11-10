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
    <Box bgColor='white' h={["700px", "700px", "600px"]} rounded='3xl'>
      <Heading
        size='lg'
        w='full'
        textAlign='center'
        p={4}
        bgGradient='linear(to-l,gray,blue.600)'
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
            <Text as={"span"} fontSize='inherit' color='blue.300'>
              Emmanuel Osayame
            </Text>
            . I enjoy creating digital contents. I focus on building accessible,
            inclusive products and creating exceptional digital experiences and{" "}
            <Text as={"span"} fontSize='inherit' color='blue.300'>
              I love What I do.
            </Text>
          </Text>

          <Tabs isFitted variant='soft-rounded' pt={20}>
            <TabList
              mb='1em'
              // p={[0, 1, 2]}
              _active={{ borderColor: "gray" }}
              fontSize={[18, 18, 20]}>
              <Tab
                borderColor='blue.400'
                m={1}
                fontSize={[18, 18, 20]}
                borderWidth={3}>
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
                borderColor='blue.400'
                m={1}
                fontSize={[18, 18, 20]}
                borderWidth={3}>
                Student
              </Tab>
              <Tab
                borderColor='blue.400'
                m={1}
                fontSize={[18, 18, 20]}
                borderWidth={3}>
                Basketball
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text fontSize={[18, 18, 20]}>
                  In building JavaScript applications, I've worked for different
                  startups, Hackathon and personal projects.I can absolutely
                  function independently of them to deliver fast, resilient
                  solutions. My focus as a developer these days is creating
                  solutions in important areas and satisfying my partners,
                  clients and those whoshare a common goal in the field.
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
                  I also play basketball. When I'm not Coding, I practice and
                  engage myself in my favourite sport.
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
