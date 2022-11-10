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
import resume from "../assets/emmanuelosayame_resume.pdf";

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
      p={2.5}
      m={2}
      bgColor='whiteAlpha.500'
      backdropFilter='auto'
      backdropBlur='lg'
      rounded='3xl'
      position='fixed'
      top={0}
      right={[2, 2, 7]}
      zIndex={20}>
      <Stack
        direction='row'
        bgColor='white'
        rounded='2xl'
        px={4}
        py='1'
        boxShadow='md'>
        {header ? (
          <>
            <Button
              variant='link'
              px={0}
              py={2}
              // fontWeight={500}
              fontSize='17'
              color='gray'
              onClick={() => scrollToProjects()}>
              Projects
            </Button>
            <Button
              variant='link'
              // fontWeight={500}
              fontSize='17'
              as={Link}
              href={resume}
              px={0}
              py={2}
              color='#b19cd9'>
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
