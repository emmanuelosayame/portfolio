import { Box, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const SkillBlock = ({
  text,
  color,
  hoverBg,
}: {
  text: string;
  color: string;
  hoverBg: string;
}) => {
  return (
    <GridItem>
      <Box bgColor='whiteAlpha.400' p={2} rounded={["3xl", "30px"]}>
        <Box
          w='auto'
          p={3}
          bgColor='white'
          rounded={["2xl", "3xl"]}
          boxShadow='sm'>
          <Text
            fontWeight={600}
            textAlign='center'
            fontSize={[16, 18, 20]}
            whiteSpace='nowrap'
            color={color}>
            {text}
          </Text>
        </Box>
      </Box>
    </GridItem>
  );
};

export default SkillBlock;
