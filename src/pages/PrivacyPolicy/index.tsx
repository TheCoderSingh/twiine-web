import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import { PRIVACY_POLICY } from '../../constants/privacyPolicy';
import * as Icons from 'iconoir-react';

interface ContentItem {
  title?: string;
  content?: string | string[];
  list?: string[];
  footer?: string;
}

const PrivacyPolicy = () => {
  const renderContent = (content: string | (string | ContentItem)[] | ContentItem) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <p key={index} className="mt-4">
              {item}
            </p>
          );
        } else if (typeof item === 'object' && item !== null) {
          return (
            <div key={index} className="mt-4">
              {item.title && <h3 className="text-primary">{item.title}</h3>}
              {typeof item.content === 'string' ? (
                <p>{item.content}</p>
              ) : (
                Array.isArray(item.content) &&
                item.content.map((paragraph, i) => (
                  <p key={i} className="mt-2">
                    {paragraph}
                  </p>
                ))
              )}
              {item.list && (
                <ul className="list-disc pl-6 mt-2">
                  {item.list.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              )}
              {item.footer && <p className="mt-2">{item.footer}</p>}
            </div>
          );
        }
        return null;
      });
    } else if (typeof content === 'string') {
      return <p className="mt-4">{content}</p>;
    }
    return null;
  };

  return (
    <div>
      <Navbar />
      <section className="w-[80%] mx-auto mt-50">
        <div className="flex">
          <Title text="Privacy Policy" icon="PrivacyPolicy" />
        </div>
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-semibold">Privacy Policy</h1>
          <p className="mt-5">{PRIVACY_POLICY.description}</p>
          <div className="my-15">
            <Title
              icon={PRIVACY_POLICY.lastUpdatedIcon as keyof typeof Icons}
              text={PRIVACY_POLICY.lastUpdated}
              bg="bg-gray-100"
              textColor="text-secondary"
            />
          </div>
          <div className="text-left">
            <p>{PRIVACY_POLICY.effectiveDate}</p>
            {PRIVACY_POLICY.sections.map((section, index) => (
              <div
                key={index}
                className={`py-10 ${index < PRIVACY_POLICY.sections.length - 1 ? 'border-b border-b-heading' : ''}`}
              >
                <h2 className="text-3xl font-semibold">{section.title}</h2>
                {section.description && <p className="mt-2">{section.description}</p>}
                {renderContent(section.content)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
