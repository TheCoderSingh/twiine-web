import * as Icons from 'iconoir-react';

interface TitleProps {
  icon: keyof typeof Icons;
  text: string;
}

const Title = ({ icon, text }: TitleProps) => {
  const Icon = Icons[icon] as React.ElementType;

  return (
    <div className="inline-flex justify-center items-center gap-2 bg-light rounded-[100px] px-4 py-2 mx-auto">
      <div>{<Icon fontSize={12} />}</div>
      <div>
        <h2 className="text-heading text-lg font-[500]">{text}</h2>
      </div>
    </div>
  );
};

export default Title;
