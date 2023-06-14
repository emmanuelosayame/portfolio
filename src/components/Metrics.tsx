import Image from "next/image";
import { CheckIcon } from "./Svgs";
import { m } from "framer-motion";

export const RightMetrics = ({
  viewProjects,
}: {
  viewProjects: () => void;
}) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1, delay: 4.5 }}
      className='fixed hidden md:flex right-10 center-y bg-green-500/20 rounded-xl p-4
     text-green-600 w-64 flex-col items-center gap-2'>
      <h3 className=''>This webapp metrics</h3>
      {/* <div className='h-36' /> */}
      <Image
        alt='app metrics'
        src={"/portfoliometrics.png"}
        width={300}
        height={180}
        className='rounded-xl border border-green-600 drop-shadow-sm'
      />
      <a
        href='https://pagespeed.web.dev/report?url=https%3A%2F%2Fwww.emmanuelosayame.delorand.com&hl=en_GB'
        className='bg-white/10 py-2 w-full rounded-lg flex justify-center text-green-700 border border-green-700
           text-sm drop-shadow-md hover:scale-110
         transition-all'>
        View page insights
      </a>
      <button
        className='bg-green-700 py-2 w-full rounded-lg flex justify-center text-white text-sm drop-shadow-md hover:scale-110
         transition-all'
        onClick={viewProjects}>
        View other projects
      </button>
    </m.div>
  );
};

export const LeftMetrics = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1, delay: 4.5 }}
      className='fixed hidden md:flex left-10 center-y bg-green-500/20 rounded-xl p-4
     text-green-600 w-64 flex-col items-center gap-2 text-center'>
      <h3 className=''>***</h3>
      <p className='text-sm'>
        You love speedy applications?, I sure as hell do.
      </p>
      <p className='text-sm'>Adhere to best practices, no cutting corners</p>
      <p className='text-sm'>
        Loads of features, but neccesary and performant.
      </p>

      <p className='text-sm inline-flex'>
        Ohh yeah, stability and scalability.
        <span className='inline-flex'>
          <CheckIcon />
        </span>
      </p>
      {/* <button
        className='bg-green-700 py-2 w-full rounded-lg flex justify-center text-white text-sm drop-shadow-md hover:scale-110
         transition-all'>
        View other projects
      </button> */}
    </m.div>
  );
};
