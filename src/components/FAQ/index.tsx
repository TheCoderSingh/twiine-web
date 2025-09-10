import { FAQS } from '../../constants';
import FAQItem from '../FAQItem';
import Title from '../Title';

const FAQ = () => {
  return (
    <section className="text-center mt-36 mb-14 md:w-[80%] lg:w-[70%] mx-auto" id="faq">
      <Title icon="HelpCircle" text="FAQs" />

      <div className="mt-5 w-[90%] mx-auto">
        <h2 className="text-tertiary text-3xl tracking-tighter font-medium">{FAQS.title}</h2>
        <p className="mt-4 text-secondary">
          {FAQS.description}
          <a href={`mailto:${FAQS.email}`} className="text-heading hover:opacity-80 transition">
            {FAQS.email}
          </a>
          .
        </p>
      </div>

      <div className="mt-8 w-[90%] mx-auto">
        {FAQS.items.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
