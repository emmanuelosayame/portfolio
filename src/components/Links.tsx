import { Box, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { GithubSvg, InstagramSvg, LinkedInSvg, SvgInstagram } from "../Svgs";

const Links = () => {
  return (
    <Box
      position='fixed'
      zIndex={10}
      left={4}
      bottom={4}
      w='fit-content'
      h='fit-content'
      p={2}
      bgColor='whiteAlpha.400'
      backdropFilter='auto'
      backdropBlur='lg'
      rounded='2xl'>
      <Box bgColor='white' rounded='xl' px='1' py='2'>
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
    </Box>
  );
};

export default Links;
