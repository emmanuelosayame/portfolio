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
    <div className='md:flex py-10 px-2 md:px-10 w-full'>
      <div className='bg-white bg-opacity-40 backdrop-blur-md rounded-3xl p-2 h-fit w-full md:w-10/12'>
        <div className='p-5 bg-white drop-shadow-md rounded-3xl'>
          <h2 className='text-neutral-400 text-xl font-semibold'>Contact Me</h2>
          <p className='text-base md:text-lg'>
            I'm currently open for work and collaborations.
          </p>
        </div>
      </div>
      <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
        <div className='w-full pb-20 md:pb-10 space-y-5 flex flex-col items-center'>
          <div className='w-full md:w-11/12'>
            <input
              className='bg-transparent outline-none border-b border-b-white text-white text-lg w-full my-3'
              placeholder='Name'
              id='firstName'
              name='name'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <input
              className='bg-transparent outline-none border-b border-b-white text-white text-lg w-full my-3'
              placeholder='Email'
              id='firstName'
              name='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <textarea
            className='bg-transparent outline-none border-b border-b-white text-white text-lg w-full my-3 resize-none'
            rows={4}
            placeholder='Message'
            id='lastName'
            {...formik.getFieldProps("message")}
          />
          <button
            className='inline-flex items-center space-x-2 disabled:opacity-50 cursor-pointer disabled:cursor-auto
             bg-white px-5 py-1 text-[#b19cd9] text-lg rounded-2xl drop-shadow-sm'
            type='submit'
            disabled={!formik.dirty}>
            <span>Shoot</span>
            <ArrowRightIcon width={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
