import SkillBlock from "./SkillsBlock";

const MyStack = () => {
  return (
    <div className='md:px-8 w-full py-5 md:w-5/8 flex justify-center flex-col md:flex-row'>
      <div className='p-2.5 w-full md:w-fit bg-white bg-opacity-40 rounded-[30px]'>
        <div className='rounded-3xl w-full md:w-80 bg-white p-3 h-full flex flex-col justify-center drop-shadow-sm'>
          <h2 className='text-orange-300 text-3xl font-semibold text-center m-2'>
            My Stack
          </h2>
          <p className=''>
            A few of the technologies I work with. These are tools I'm familiar
            with.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-5 px-10 md:px-10 pt-10 md:pt-0 gap-5 w-full'>
        <SkillBlock hoverBg='blue.600' text='Javascript' color='yellow' />
        <SkillBlock hoverBg='blue.600' text='Typescript' color='blue' />
        <SkillBlock hoverBg='blue.600' text='NodeJs' color='green' />
        <SkillBlock hoverBg='blue.600' text='React' color='skyblue' />
        <SkillBlock hoverBg='blue.600' text='NextJs' color='black' />
        <SkillBlock hoverBg='blue.600' text='Redux Tk' color='purple' />
        <SkillBlock hoverBg='blue.600' text='Firebase' color='orange' />
        <SkillBlock hoverBg='blue.600' text='Express' color='red' />
        <SkillBlock hoverBg='blue.600' text='GraphQL' color='crimson' />
        <SkillBlock hoverBg='blue.600' text='MongoDB' color='lightgreen' />
      </div>
    </div>
  );
};

export default MyStack;
