import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SkillBlock from "./SkillsBlock";

const MyStack = () => {
  return (
    <Flex p={8} w='80%'>
      <Box w='fit-content'>
        <Heading color='blue.600'>My Stack</Heading>
        <Text maxW={80}>
          A few of the technologies and frameworks I work with. These are tools
          I'm familiar with.
        </Text>
      </Box>
      <Grid
        p={10}
        w='70%'
        gridTemplateColumns={[
          "repeat(auto-fill,minmax(130px,1fr))",
          "repeat(auto-fit,minmax(120px,1fr))",
        ]}
        gridAutoRows='auto'
        rowGap={5}
        columnGap={5}>
        <SkillBlock
          p={3}
          w={180}
          hoverBg='blue.600'
          text='Javascript'
          color='yellow.400'
        />
        <SkillBlock
          p={3}
          w={150}
          hoverBg='blue.600'
          text='Typescript'
          color='blue.600'
        />
        <SkillBlock
          p={5}
          w={120}
          hoverBg='blue.600'
          text='NodeJs'
          color='teal.300'
        />
        <SkillBlock
          p={4}
          w={90}
          hoverBg='blue.600'
          text='React'
          color='skyblue'
        />
        <SkillBlock
          p={8}
          w={100}
          hoverBg='blue.600'
          text='NextJs'
          color='white'
        />
        <SkillBlock
          p={5}
          w={80}
          hoverBg='blue.600'
          text='Firebase'
          color='orange.500'
        />
        <SkillBlock
          p={3}
          w={90}
          hoverBg='blue.600'
          text='Express'
          color='red.600'
        />
        <SkillBlock
          p={10}
          w={180}
          hoverBg='blue.600'
          text='GraphQL'
          color='crimson'
        />
        <SkillBlock
          p={5}
          w={120}
          hoverBg='blue.600'
          text='MongoDB'
          color='green.400'
        />
      </Grid>
    </Flex>
  );
};

export default MyStack;
