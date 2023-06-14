"use client";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { m } from "framer-motion";

const skillList: ListProps[] = [
  {
    text: "Javascript",
    className: "border-yellow-500 text-yellow-500 bg-yellow-500/10",
  },
  {
    className: "border-blue-600 text-blue-600 bg-blue-500/10",
    text: "Typescript",
  },
  {
    className: "border-green-700 text-green-700 bg-green-700/10",
    text: "NodeJs",
  },
  { className: "border-blue-400 text-blue-400 bg-blue-400/10", text: "React" },
  {
    className: "border-blue-400 text-blue-400 bg-blue-400/10",
    text: "R Native",
  },
  { className: "border-white text-white bg-white/10", text: "NextJs" },
  { className: "border-blue-500 text-blue-500 bg-blue-500/10", text: "Trpc" },
  {
    className: "border-purple-600 text-purple-600 bg-putext-purple-600/10",
    text: "Redux Tk",
  },
  {
    className: "border-orange-400 text-orange-400 bg-orange-400/10",
    text: "Firebase",
  },
  { className: "border-red-900 text-red-900 bg-red-900/10", text: "Express" },
  {
    className: "border-pink-600 text-pink-600 bg-pink-600/10",
    text: "GraphQL",
  },
  {
    className: "border-green-500 text-green-500 bg-green-500/10",
    text: "MongoDB",
  },
  {
    className: "border-blue-500 text-blue-500 bg-blue-500/10",
    text: "Postgres",
  },
  {
    className: "border-neutral-500 text-neutral-500 bg-neutral-500/10",
    text: "Zustand",
  },
  { className: "border-white text-white bg-white/10", text: "Prisma" },
  {
    className: "border-green-500 text-green-500 bg-green-500/10 md:hidden",
    text: "Drizzle",
  },
];

interface ListProps {
  text: string;
  className: string;
}

const MyStack = () => {
  const [shuffledList, setSL] = useState<ListProps[]>([]);

  useEffect(() => {
    setSL(
      skillList
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
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

  const [parent] = useAutoAnimate({ duration: 650, easing: "ease-in-out" });

  return (
    <m.div
      initial={{ scale: 0.5, y: 150 }}
      whileInView={{ scale: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.6 }}
      // viewport={{ amount: "some" }}
      className='md:px-8 w-11/12 py-5 md:w-5/8 flex justify-center flex-col md:flex-row gap-5'>
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
      <div
        ref={parent}
        className='grid grid-cols-2 md:grid-cols-5 p-10 md:px-10 gap-y-5 gap-x-4 w-full bg-black/20 backdrop-blur-lg rounded-[35px]'>
        {shuffledList.map((x) => (
          <SkillBlock key={x.text} className={x.className} text={x.text} />
        ))}
      </div>
    </m.div>
  );
};

const SkillBlock = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <m.div
      initial={{ scale: 0.7, opacity: 0, y: 150 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.6 }}
      whileHover={{ scale: 1.3, z: 10 }}
      drag
      className={`py-4 md:p-3 rounded-3xl md:rounded-3xl drop-shadow-sm border shadow-md ${className} cursor-pointer`}>
      <p className={`text-center whitespace-nowrap text-base md:text-xl`}>
        {text}
      </p>
    </m.div>
  );
};

export default MyStack;
