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
  w: number;
  p: string | number;
  color: string;
  hoverBg: string;
}) => {
  return (
    <GridItem>
      <Box bgColor='whiteAlpha.300' p={1} rounded='full'>
        <Box w={w} p={p} bgColor='blackAlpha.700' m={1} rounded='full'>
          <Text fontWeight={600} color={color}>
            {text}
          </Text>
        </Box>
      </Box>
    </GridItem>
  );
};

export default SkillBlock;
