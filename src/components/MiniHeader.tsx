import { Box, Button, Heading, IconButton, Stack } from "@chakra-ui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import React from "react";

const MiniHeader = ({
  header,
  headerOff,
}: {
  header: Boolean;
  headerOff: () => void;
}) => {
  return (
    <Box
      p={2}
      m={2}
      bgColor='whiteAlpha.400'
      rounded='md'
      position='absolute'
      top={0}
      right={10}
      zIndex={20}>
      <Stack direction='row' bgColor='blackAlpha.800' rounded='md' px={2}>
        {header ? (
          <>
            <Button variant='ghost' p={0} color='gray'>
              Projects
            </Button>
            <Button variant='ghost' p={0} color='blue.700'>
              Resume
            </Button>
            <Button variant='ghost' p={0} color='blue.600'>
              My Shelf
            </Button>
          </>
        ) : (
          <IconButton
            size='xs'
            aria-label=''
            variant='ghost'
            _hover={{ bgColor: "transparent" }}
            onClick={headerOff}>
            <Bars3BottomLeftIcon width={30} color='green' stroke='green' />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};

export default MiniHeader;
