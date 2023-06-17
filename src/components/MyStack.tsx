"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import { useAutoAnimate } from "@formkit/auto-animate/react";
import { m } from "framer-motion";
import useMediaQuery from "./useMediaQuery";
import Tilt from "react-parallax-tilt";

const skillList: ListProps[] = [
  {
    text: "Javascript",
    className: "border-yellow-500 text-yellow-500 bg-yellow-500/20",
  },
  {
    className: "border-blue-600 text-blue-600 bg-blue-500/20",
    text: "Typescript",
  },
  {
    className: "border-green-700 text-green-700 bg-green-700/20",
    text: "NodeJs",
  },
  { className: "border-blue-400 text-blue-400 bg-blue-400/20", text: "React" },
  {
    className: "border-blue-400 text-blue-400 bg-blue-400/20",
    text: "R. Native",
  },
  { className: "border-white text-white bg-white/20", text: "NextJs" },
  { className: "border-blue-500 text-blue-500 bg-blue-500/20", text: "Trpc" },
  {
    className: "border-purple-600 text-purple-600 bg-purple-600/20",
    text: "Redux Tk",
  },
  {
    className: "border-orange-400 text-orange-400 bg-orange-400/20",
    text: "Firebase",
  },
  { className: "border-red-900 text-red-900 bg-red-900/20", text: "Express" },
  {
    className: "border-pink-600 text-pink-600 bg-pink-600/20",
    text: "GraphQL",
  },
  {
    className: "border-green-500 text-green-500 bg-green-500/20",
    text: "MongoDB",
  },
  {
    className: "border-blue-500 text-blue-500 bg-blue-500/20",
    text: "Postgres",
  },
  {
    className: "border-neutral-500 text-neutral-500 bg-neutral-500/20",
    text: "Zustand",
  },
  { className: "border-white text-white bg-white/20", text: "Prisma" },
  {
    className: "border-green-500 text-green-500 bg-green-500/20 md:hidden",
    text: "Drizzle",
  },
];

interface ListProps {
  text: string;
  className: string;
}

const MyStack = () => {
  const [shuffledList, setSL] = useState<ListProps[]>([]);

  const shuffle = skillList
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  useEffect(() => {
    setSL(shuffle);
    // const unsub = setInterval(() => {
    //   setSL(
    //     skillList
    //       .map((value) => ({ value, sort: Math.random() }))
    //       .sort((a, b) => a.sort - b.sort)
    //       .map(({ value }) => value)
    //   );
    // }, 5000);

    // return () => clearInterval(unsub);
  }, []);

  // const [parent] = useAutoAnimate({ duration: 650, easing: "ease-in-out" });

  // const [dragged, setDragged] = useState(false);

  const mq = useMediaQuery("(min-width: 800px)");

  return (
    <Tilt
      // onViewportEnter={() => setSL(shuffle)}
      // initial={mq ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
      // whileInView={
      //   mq
      //     ? {}
      //     : {
      //         opacity: 1,
      //         y: 0,
      //         scale: 1,
      //         transition: {
      //           // duration: 1,
      //         },
      //       }
      // }
      // viewport={{ amount: 0.2 }}
      className='md:px-8 w-[98%] py-5 md:w-5/8 flex justify-center flex-col md:flex-row gap-5 rounded-[35px] bg-black/20 backdrop-blur-lg'>
      <div className='p-2 w-full mx-auto md:w-fit'>
        <div className='rounded-xl w-full md:w-80 p-3 h-full flex flex-col justify-center drop-shadow-sm'>
          <h2 className='text-white text-xl md:text-2xl font-medium text-center m-2'>
            <span className='text-green-500'>My</span> Stack
          </h2>
          <p className='text-center'>
            A few of the technologies I work with. These are tools I'm familiar
            with.
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full items-center'>
        <p className='text-centre text-green-600 font-medium'>
          {/* {!dragged ? "You can move any around 😉" : "woosh !! 😉"} */}
        </p>
        <div className='grid grid-cols-2 md:grid-cols-5 p-5 md:px-10 gap-y-5 gap-x-4 w-full md:w-10/12 '>
          {shuffledList.map((x, index) => (
            <SkillBlock
              index={index}
              // dragged={dragged}
              // setDragged={setDragged}
              key={x.text}
              className={x.className}
              text={x.text}
            />
          ))}
        </div>
      </div>
    </Tilt>
  );
};

const SkillBlock = ({
  text,
  className,
  // dragged,
  // setDragged,
  index,
}: {
  text: string;
  className: string;
  // dragged: boolean;
  // setDragged: Dispatch<SetStateAction<boolean>>;
  index: number;
}) => {
  const mq = useMediaQuery("(min-width: 800px)");

  return (
    <>
      {mq ? (
        <m.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              // duration: 1,
              delay: (index + 1) * 0.08,
            },
          }}
          className={`py-5 md:py-10 rounded-2xl md:rounded-3xl drop-shadow-sm border shadow-md
      ${className} cursor-pointer`}>
          <p className={`text-center whitespace-nowrap text-base md:text-xl`}>
            {text}
          </p>
        </m.div>
      ) : (
        <div
          className={`py-5 md:py-10 rounded-2xl md:rounded-3xl drop-shadow-sm border shadow-md
      ${className} cursor-pointer`}>
          <p className={`text-center whitespace-nowrap text-base md:text-xl`}>
            {text}
          </p>
        </div>
      )}
    </>
  );
};

export default MyStack;
