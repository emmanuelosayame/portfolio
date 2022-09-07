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
      <Box bgColor='whiteAlpha.300' p={1} rounded='full'>
        <Box w={w} p={p} bgColor='whiteAlpha.400' m={1} rounded='full'>
          <Text fontWeight={600} fontSize={[13, 15, 18]} color={color}>
            {text}
          </Text>
        </Box>
      </Box>
    </GridItem>
  );
};

export default SkillBlock;
