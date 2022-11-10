import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SkillBlock from "./SkillsBlock";

const MyStack = () => {
  return (
    <Flex
      px={[0, 2, 8]}
      py={40}
      w={"80%"}
      flexDirection={["column", "column", "row"]}>
      <Box p='2.5' bgColor='whiteAlpha.300' rounded='3xl'>
        <Stack
          justify='center'
          w='fit-content'
          bgColor='white'
          rounded='2xl'
          p='3'
          h='full'
          boxShadow='sm'>
          <Heading
            bgGradient='linear(to-l,#b19cd9,#cea2fd)'
            bgClip='text'
            size='lg'
            textAlign='center'>
            My Stack
          </Heading>
          <Text maxW={80}>
            A few of the technologies and softwares I work with. These are tools
            I'm familiar with.
          </Text>
        </Stack>
      </Box>
      <Grid
        // bgColor='red'
        pt={10}
        px={[2, 4, 10]}
        w={["full", "full", "70%"]}
        gridTemplateColumns={[
          "repeat(auto-fill,minmax(90px,1fr))",
          "repeat(auto-fill,minmax(90px,1fr))",
          "repeat(auto-fit,minmax(120px,1fr))",
        ]}
        gridAutoRows='auto'
        rowGap={5}
        columnGap={5}>
        <SkillBlock hoverBg='blue.600' text='Javascript' color='yellow.400' />
        <SkillBlock hoverBg='blue.600' text='Typescript' color='blue.500' />
        <SkillBlock hoverBg='blue.600' text='NodeJs' color='green.300' />
        <SkillBlock hoverBg='blue.600' text='React' color='skyblue' />
        <SkillBlock hoverBg='blue.600' text='NextJs' color='black' />
        <SkillBlock hoverBg='blue.600' text='Redux Tk' color='purple' />
        <SkillBlock hoverBg='blue.600' text='Firebase' color='orange.300' />
        <SkillBlock hoverBg='blue.600' text='Express' color='red.600' />
        <SkillBlock hoverBg='blue.600' text='GraphQL' color='crimson' />
        <SkillBlock hoverBg='blue.600' text='MongoDB' color='green.200' />
      </Grid>
    </Flex>
  );
};

export default MyStack;
