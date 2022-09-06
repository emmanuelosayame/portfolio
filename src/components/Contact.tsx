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
    <Stack direction='row' p={10} w='full'>
      <Box>
        <Heading color='blue.600'>Contact Me</Heading>
        <Text>I'm currently open to brainstrom on your project</Text>
      </Box>
      <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
        <Stack w='full' spacing={5}>
          <Stack direction='row' spacing={10} w='80%'>
            <Input
              variant='flushed'
              size='lg'
              placeholder='Name'
              w='full'
              id='firstName'
              name='name'
              type='text'
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
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Stack>
          <Textarea
            rows={4}
            size='lg'
            w='80%'
            variant='flushed'
            resize='none'
            placeholder='Message'
            id='lastName'
            {...formik.getFieldProps("message")}
          />
          <Button
            w='fit-content'
            bgColor='blue.600'
            color='white'
            px={5}
            rightIcon={<ArrowRightIcon width={20} />}
            type='submit'>
            Shoot
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Contact;
