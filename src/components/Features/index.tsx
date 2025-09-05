import { FEATURES } from '../../constants';
import Feature from '../Feature';
import Title from '../Title';
import * as Icons from 'iconoir-react';

const Features = () => {
  return (
    <section className="mt-36 mb-14 text-center">
      <Title icon="LightBulbOn" text="Features" />
      <div className="mt-5">
        <h1 className="text-3xl font-[500] text-tertiary md:text-5xl">{FEATURES.title}</h1>
        <p className="text-secondary mt-2 w-[90%] mx-auto">{FEATURES.description}</p>
      </div>

      <div className="lg:flex justify-center items-center mt-12 max-w-6xl mx-auto gap-20">
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <img src={FEATURES.image.src} alt="Features" className="max-h-[500px]" />
        </div>
        <div className="w-[90%] mx-auto lg:flex-1">
          {FEATURES.items.map((feature, index) => (
            <div key={index} className="mt-5">
              <Feature icon={feature.icon as keyof typeof Icons} text={feature.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
