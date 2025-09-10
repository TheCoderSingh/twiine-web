import * as Icons from 'iconoir-react';

interface FeatureProps {
  icon: keyof typeof Icons;
  text: string;
}

const Feature = ({ icon, text }: FeatureProps) => {
  const Icon = Icons[icon] as React.ElementType;

  return (
    <div className="flex items-center gap-3 rounded-full px-4 py-2 lg:max-w-fit bg-light">
      <Icon fontSize={12} />
      <h1 className="text-tertiary text-xs sm:text-base text-left">{text}</h1>
    </div>
  );
};

export default Feature;
