import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    onSubmit: (values, { resetForm }) => {
      //   alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <Stack
      direction={["column", "column", "row"]}
      py={10}
      px={[2, 4, 10]}
      w='full'>
      <Box
        bgColor='whiteAlpha.400'
        backdropFilter='auto'
        backdropBlur='md'
        rounded='3xl'
        p='2'
        h='fit-content'
        w={["full", "full", "70%"]}>
        <Box p={5} bgColor='white' boxShadow='md' rounded='3xl'>
          <Heading bgGradient='linear(to-l,#b19cd9,#cea2fd)' bgClip='text'>
            Contact Me
          </Heading>
          <Text fontSize={[16, 18, 20]}>
            I'm currently open to brainstrom on your project
          </Text>
        </Box>
      </Box>
      <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
        <Stack w='full' spacing={5} pb={["20", "20", "10"]} align='center'>
          <Stack direction='row' spacing={10} w={["full", "full", "80%"]}>
            <Input
              variant='flushed'
              size='lg'
              placeholder='Name'
              w='full'
              id='firstName'
              name='name'
              type='text'
              color='white'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <Input
              variant='flushed'
              size='lg'
              placeholder='Email'
              w='full'
              id='firstName'
              name='email'
              type='email'
              color='white'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Stack>
          <Textarea
            rows={4}
            size='lg'
            w={["full", "full", "80%"]}
            variant='flushed'
            resize='none'
            placeholder='Message'
            color='white'
            id='lastName'
            {...formik.getFieldProps("message")}
          />
          <Button
            w='fit-content'
            bgColor='white'
            color='#b19cd9'
            fontSize='18px'
            rounded='2xl'
            p={5}
            rightIcon={<ArrowRightIcon width={20} />}
            type='submit'
            isDisabled={!formik.dirty}>
            Shoot
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Contact;
