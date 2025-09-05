import * as Icons from 'iconoir-react';

interface TitleProps {
  icon: keyof typeof Icons;
  text: string;
}

const Title = ({ icon, text }: TitleProps) => {
  const Icon = Icons[icon] as React.ElementType;

  return (
    <div className="flex justify-center items-center gap-2 bg-light w-[120px] rounded-[100px] px-16 py-2 mx-auto">
      <div>{<Icon fontSize={12} />}</div>
      <div>
        <h2 className="text-heading text-lg font-[500]">{text}</h2>
      </div>
    </div>
  );
};

export default Title;
