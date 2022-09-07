import { Box, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { GithubSvg, InstagramSvg, LinkedInSvg, SvgInstagram } from "../Svgs";

const Links = () => {
  return (
    <Box
      position='absolute'
      zIndex={10}
      left={4}
      bottom={4}
      w='fit-content'
      h='fit-content'
      p={1.5}
      m={2}
      bgColor='whiteAlpha.300'
      backdropFilter='auto'
      backdropBlur='sm'
      rounded='xl'>
      <Stack>
        <Link href='https://github.com/biglevvi'>
          <GithubSvg />
        </Link>
        <Link href='https://www.linkedin.com/in/emmanuel-osayame-384702227'>
          <LinkedInSvg />
        </Link>
        <Link href='https://instagram.com/biglevvi'>
          <InstagramSvg />
        </Link>
      </Stack>
    </Box>
  );
};

export default Links;
