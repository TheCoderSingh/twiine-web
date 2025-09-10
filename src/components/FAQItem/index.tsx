import { useState } from 'react';
import { Plus } from 'iconoir-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full cursor-pointer"
      >
        <h3 className="text-left text-xl text-heading md:text-2xl">{question}</h3>
        <span className="rounded-full bg-light text-heading flex justify-center items-center p-1">
          <Plus
            width={25}
            height={25}
            className={`transition duration-300 ease-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}
          />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="mt-2 text-tertiary text-left md:w-[80%] overflow-hidden">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
