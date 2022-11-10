import {
  Box,
  Button,
  Heading,
  IconButton,
  Link,
  Stack,
} from "@chakra-ui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import resume from "../assets/resume.pdf";

const MiniHeader = ({
  header,
  headerOff,
  scrollToProjects,
}: {
  header: Boolean;
  headerOff: () => void;
  scrollToProjects: () => void;
}) => {
  return (
    <Box
      p={2}
      m={2}
      bgColor='whiteAlpha.500'
      backdropFilter='auto'
      backdropBlur='lg'
      rounded='2xl'
      position='fixed'
      top={0}
      right={10}
      zIndex={20}>
      <Stack direction='row' bgColor='white' rounded='xl' px={2}>
        {header ? (
          <>
            <Button
              variant='link'
              px={0}
              py={2}
              color='gray'
              onClick={() => scrollToProjects()}>
              Projects
            </Button>
            <Button
              variant='link'
              as={Link}
              href={resume}
              px={0}
              py={2}
              color='blue.600'>
              Resume
            </Button>
            {/* <Button variant='link' px={0} py={2} color='blue.600'>
              My Shelf
            </Button> */}
          </>
        ) : (
          <IconButton
            size='xs'
            color='gray'
            aria-label='mini-menu'
            variant='ghost'
            _hover={{ bgColor: "transparent" }}
            onClick={headerOff}>
            <Bars3BottomLeftIcon width={25} stroke='gray' />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};

export default MiniHeader;
