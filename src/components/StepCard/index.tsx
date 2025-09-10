const StepCard = ({ title, image }: { title: string; image: { src: string; alt: string } }) => {
  return (
    <article className="bg-gradient-to-b from-[#923cf60c] to-[rgba(38,107,101,0.7)] h-[450px] overflow-hidden w-[90%] mx-auto rounded-[25px] relative md:w-[45%] lg:w-[35%]">
      <h2 className="px-2 pt-5 mt-10 text-tertiary text-2xl font-bold">{title}</h2>
      <img
        src={image.src}
        alt={image.alt}
        className="max-w-[250px] absolute left-1/2 -translate-x-1/2 top-40 rounded-[50px] md:top-45 lg:top-50"
      />
    </article>
  );
};

export default StepCard;
