import { Box, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { GithubSvg, WhatsappSvg, LinkedInSvg, SvgInstagram } from "../Svgs";

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
      <Box bgColor='white' rounded='xl' px='1' py='2' boxShadow='md'>
        <Stack>
          <Link href='https://github.com/biglevvi'>
            <GithubSvg />
          </Link>
          <Link href='https://www.linkedin.com/in/emmanuel-osayame-384702227'>
            <LinkedInSvg />
          </Link>
          <Link href='http://wa.me/07067266258'>
            <WhatsappSvg />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Links;
