import { HOW_IT_WORKS } from '../../constants';
import StepCard from '../StepCard';
import Title from '../Title';

const HowItWorks = () => {
  return (
    <section className="mt-36 mb-14 text-center">
      <Title icon="Journal" text="How it Works" />

      <div className="mt-5 w-[90%] mx-auto">
        <h2 className="text-tertiary text-3xl tracking-tighter font-medium">
          {HOW_IT_WORKS.title}
        </h2>
        <p className="mt-4 text-secondary">{HOW_IT_WORKS.description}</p>
      </div>

      <div className="flex flex-col gap-10 mt-16 md:flex-row md:justify-center md:flex-wrap lg:flex-nowrap lg:gap-5 lg:w-[90%] xl:w-[70%] lg:mx-auto">
        {HOW_IT_WORKS.steps.map(({ title, image }, index) => (
          <StepCard key={index} title={title} image={image} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
