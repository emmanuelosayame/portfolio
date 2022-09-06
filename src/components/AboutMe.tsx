import { Box, Divider, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react'
import { Cube2Svg } from '../Svgs';

const AboutMe = () => {
  return (
    <>
      <Divider pt={14} borderColor='transparent' />
      <Box w='full' bgColor='gray'>
        <Box bgColor='blackAlpha.900' h='600px'>
          <Divider borderColor='blue.800' />
          <Heading
            w='full'
            // bgColor='whiteAlpha.200'
            bgGradient='linear(to-r,blue.500,blue.400,blue.600)'
            bgClip='text'>
            About Me
          </Heading>
          <Divider borderColor='blue.500' />
          <Stack direction='row' p={10}>
            <Box
              w='full'
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'>
              <Text w='full' color='gray' fontSize={20}>
                My names are{" "}
                <span style={{ color: "white" }}>Emmanuel Osayame</span>. I
                enjoy creating digital contents. I focus on building accessible,
                inclusive products and creating exceptional digital experiences
                and <span style={{ color: "white" }}>I love What I do.</span>
              </Text>

              <Tabs isFitted variant='enclosed' w='full' pt={20}>
                <TabList
                  mb='1em'
                  p={2}
                  _active={{ borderColor: "gray" }}
                  fontSize={20}>
                  <Tab
                    borderColor='blue.600'
                    m={1}
                    fontSize={20}
                    borderWidth={3}>
                    Developer
                  </Tab>
                  <Tab
                    borderColor='blue.600'
                    m={1}
                    fontSize={20}
                    borderWidth={3}>
                    Engineer
                  </Tab>
                  <Tab
                    borderColor='blue.600'
                    m={1}
                    fontSize={20}
                    borderWidth={3}>
                    Student
                  </Tab>
                  <Tab
                    borderColor='blue.600'
                    m={1}
                    fontSize={20}
                    borderWidth={3}>
                    Baller
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <p>
                      In building JavaScript applications, I've worked for
                      different startups, Hackathon and personal projects.I can
                      absolutely function independently of them to deliver fast,
                      resilient solutions. My focus as a developer these days is
                      creating solutions in important areas and satisfying my
                      partners, clients and those whoshare a common goal in the
                      field.
                    </p>
                  </TabPanel>

                  <TabPanel>
                    <p>
                      I've also been very passionate and experienced in IOT and
                      related Engineering fields. I've built tons of hardware
                      projects using IOT components and C#
                      programming.Fast-forward to today, and I've had production
                      projects, ideas and a medal in a skills and vocational
                      exhibition. My focus these days is bringing to life
                      technology to make innovative inventions.
                    </p>
                  </TabPanel>

                  <TabPanel>
                    <p>
                      I am currently pursuing a Bachelor of Engineering
                      degree(Mechatronics) in the university of Benin, Edo
                      State. I completed secondary education in the Federal
                      Science and Technical College, Yaba, Lagos.
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      I also play basketball. When I'm not Coding, I practice
                      and engage myself in my favourite sport.
                    </p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Box
              w='full'
              display='flex'
              justifyContent='center'
              alignItems='center'>
              {/* <Box p={0} bgColor='whiteAlpha.200' rounded='lg'> */}
              <Cube2Svg fill='blue.600' boxSize={80} />
              {/* </Box> */}
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default AboutMe