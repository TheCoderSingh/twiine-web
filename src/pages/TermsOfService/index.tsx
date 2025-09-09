import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import { TERMS_OF_SERVICE } from '../../constants/termsOfService';
import * as Icons from 'iconoir-react';

const TermsOfService = () => {
  return (
    <div>
      <Navbar />
      <section className="w-[80%] mx-auto mt-50">
        <div className="flex">
          <Title text="Terms of Service" icon="ShieldCheck" />
        </div>
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-semibold">Terms of Service</h1>
          <p className="mt-5">{TERMS_OF_SERVICE.description}</p>
          <div className="my-15">
            <Title
              icon={TERMS_OF_SERVICE.lastUpdatedIcon as keyof typeof Icons}
              text={TERMS_OF_SERVICE.lastUpdated}
              bg="gray-100"
              textColor="secondary"
            />
          </div>
          <div className="text-left">
            <p>{TERMS_OF_SERVICE.effectiveDate}</p>
            {TERMS_OF_SERVICE.sections.map((section, index) => (
              <div
                key={index}
                className={`py-10 ${index < TERMS_OF_SERVICE.sections.length - 1 ? 'border-b border-b-heading' : ''}`}
              >
                <h2 className="text-3xl font-semibold">{section.title}</h2>
                {section.content && <p className="mt-2">{section.content}</p>}
                {section.list && (
                  <ul className="list-disc pl-6 mt-2">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsOfService;
