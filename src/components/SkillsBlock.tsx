const SkillBlock = ({
  text,
  color,
  hoverBg,
}: {
  text: string;
  color: string;
  hoverBg: string;
}) => {
  return (
    <div>
      <div className='bg-white bg-opacity-40 p-2 rounded-3xl md:rounded-[30px]'>
        <div className='p-3 bg-white rounded-2xl md:rounded-3xl drop-shadow-sm'>
          <p
            className={`text-center whitespace-nowrap text-xl`}
            style={{ color }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillBlock;
