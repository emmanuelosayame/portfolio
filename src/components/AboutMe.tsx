import { Cube2Svg } from "../Svgs";
import * as Tabs from "@radix-ui/react-tabs";

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: "Developer",
    value: "tab1",
  },
  {
    title: "Student",
    value: "tab2",
  },

  {
    title: "BasketBall",
    value: "tab3",
  },
];

const AboutMe = () => {
  return (
    <div className='bg-white h-[560px] md:h-[600px] rounded-3xl w-full'>
      <h2 className='w-full text-center p-4 text-blue-400 font-semibold text-xl'>
        About Me
      </h2>
      <div className='flex flex-col md:flex-row py-5 px-2 md:px-10'>
        <div className='w-full flex flex-col justify-center items-center px-2 gap-5'>
          <p className='w-fulltext-gray-500 text-base md:text-xl'>
            I'm{" "}
            <span className='text-blue-400 text-lg font-semibold'>
              Emmanuel
            </span>{" "}
            and I enjoy creating digital contents. I focus on building
            accessible, inclusive products and{" "}
            <span className='text-red-400 font-semibold'>
              I love What I do.
            </span>
          </p>

          <Tabs.Root className='w-full h-full p-2' defaultValue='tab1'>
            <Tabs.List
              className='flex w-full rounded-t-3xl bg-white'
              aria-label=''>
              {tabs.map(({ title, value }) => (
                <Tabs.Trigger
                  key={`tab-trigger-${value}`}
                  value={value}
                  className='group first:rounded-tl-lg last:rounded-tr-lg border-b first:border-r last:border-l
                 border-gray-300 focus-visible:data-active:border-b-red-500 data-inactive:bg-gray-100
                  flex-1 px-3 py-2.5 focus:data-active:border-b-red focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 data-active:text-red-500 data-active:font-semibold'>
                  <span className={"text-base "}>{title}</span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <Tabs.Content
              value={"tab1"}
              className={"rounded-b-lg bg-white px-2 py-4"}>
              <p className='text-base'>
                I've been working with major frontend tools for two years now
                and I have gained a lot of experience in the ecosystem. I'm well
                versed in the aspects of react development including ssr, ssg,
                csr, components reusablity, state management...
              </p>
              <p>
                I also have a strong suite in backend development, I work with
                technologies like trpc, prisma, Nextjs api, Express...
              </p>
              <p>
                I always keep up with the latest technologies and I can quickly
                adapt
              </p>
            </Tabs.Content>
            <Tabs.Content
              value={"tab2"}
              className={"rounded-b-lg bg-white px-6 py-4"}>
              <p className=''>
                I am currently pursuing a Bachelor's degree in Engineering
                (Mechatronics) in the university of Benin, Edo State. I
                completed secondary education in Federal Science and Technical
                College, Yaba. Lagos.
              </p>
            </Tabs.Content>
            <Tabs.Content
              value={"tab3"}
              className={"rounded-b-lg bg-white px-6 py-4 "}>
              <p className=''>
                I also play basketball 👀. Hit me up with some NBA tips.
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className='hidden justify-center items-center md:block w-full'>
          <Cube2Svg />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
