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
    <div className='bg-white h-[700px] md:h-[600px] rounded-3xl w-full'>
      <h2 className='w-full text-center p-4 bg-clip-text bg-gradient-to-r from-[#b19cd9] to-[#cea2fd]'>
        About Me
      </h2>
      <div className='flex flex-col md:flex-row py-10 px-2 md:px-10'>
        <div className='w-full flex flex-col justify-center items-center px-4'>
          <p className='w-fulltext-gray-500 text-base md:text-xl'>
            My names are{" "}
            <span className='text-[#D3CCE3]'>Emmanuel Osayame</span>. I enjoy
            creating digital contents. I focus on building accessible, inclusive
            products and{" "}
            <span className='text-[#D3CCE3]'>I love What I do.</span>
          </p>

          <Tabs.Root className='w-full h-full p-3' defaultValue='tab1'>
            <Tabs.List
              className='flex w-full rounded-t-lg bg-white dark:bg-gray-800'
              aria-label=''>
              {tabs.map(({ title, value }) => (
                <Tabs.Trigger
                  key={`tab-trigger-${value}`}
                  value={value}
                  className='group first:rounded-tl-lg last:rounded-tr-lg border-b first:border-r last:border-l
                 border-gray-300 dark:border-gray-600 radix-state-active:border-b-gray-700 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-gray-50 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800
                  flex-1 px-3 py-2.5 focus:radix-state-active:border-b-red focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                  <span
                    className={
                      "text-base font-medium text-gray-700 dark:text-gray-100"
                    }>
                    {title}
                  </span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <Tabs.Content
              value={"tab1"}
              className={"rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800"}>
              <p className=''>
                I've been working with major frontend tools over a year now and
                I have gained a lot of experience in the ecosystem. I am well
                versed in the aspects of react development including ssr, ssg,
                csr, components reusablity, state management...
              </p>
              <p>
                I'm also experienced in graphql, backend services like firebase
                and AWS. I always keep up with the latest technologies and I can
                quickly adapt
              </p>
            </Tabs.Content>
            <Tabs.Content
              value={"tab2"}
              className={"rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800"}>
              <p className=''>
                I am currently pursuing a Bachelor's degree in Engineering
                (Mechatronics) in the university of Benin, Edo State. I
                completed secondary education in Federal Science and Technical
                College, Yaba. Lagos.
              </p>
            </Tabs.Content>
            <Tabs.Content
              value={"tab3"}
              className={"rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800"}>
              <p className=''>
                I also play basketball 👀. Hit me up with some NBA tips.
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className='hidden justify-center items-center md:block w-full'>
          <Cube2Svg fill='blue.600' boxSize={[80]} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
