import { Box, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const SkillBlock = ({
  text,
  w,
  p,
  color,
  hoverBg,
}: {
  text: string;
  w: any;
  p: string | number | any[];
  color: string;
  hoverBg: string;
}) => {
  return (
    <GridItem>
      <Box bgColor='whiteAlpha.400' p={2} rounded='3xl'>
        <Box w='auto' p={1} bgColor='white' rounded='2xl'>
          <Text
            fontWeight={600}
            textAlign='center'
            fontSize={[13, 15, 18]}
            color={color}>
            {text}
          </Text>
        </Box>
      </Box>
    </GridItem>
  );
};

export default SkillBlock;
