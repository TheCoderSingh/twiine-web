import { INTERACTIONS } from '../../constants';

const Interactions = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-primary text-3xl font-bold md:text-5xl">{INTERACTIONS.heading}</h2>
        <div className="mt-5 mx-auto h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded" />
      </div>

      <ul className="mt-10 max-w-5xl mx-auto space-y-8">
        {INTERACTIONS.items.map((item, index) => (
          <li
            key={index}
            className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1
              md:flex md:items-center md:gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            aria-labelledby={`interaction-${index}-title`}
          >
            <div className="flex-shrink-0 flex items-start md:items-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-lg font-semibold">
                {index + 1}
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex-1">
              <h3
                id={`interaction-${index}-title`}
                className="text-primary text-2xl font-bold md:text-3xl"
              >
                {item.title}
              </h3>
              <p className="text-tertiary mt-3 md:text-lg">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interactions;
