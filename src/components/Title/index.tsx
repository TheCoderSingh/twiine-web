import * as Icons from 'iconoir-react';

interface TitleProps {
  icon: keyof typeof Icons;
  text: string;
  bg?: string;
  textColor?: string;
}

const Title = ({ icon, text, bg = 'bg-light', textColor = 'text-heading' }: TitleProps) => {
  const Icon = Icons[icon] as React.ElementType;

  return (
    <div
      className={`inline-flex justify-center items-center gap-2 rounded-[100px] px-4 py-2 mx-auto ${bg}`}
    >
      <div>
        <Icon fontSize={12} />
      </div>
      <div>
        <h2 className={`text-lg font-[500] ${textColor}`}>{text}</h2>
      </div>
    </div>
  );
};

export default Title;
