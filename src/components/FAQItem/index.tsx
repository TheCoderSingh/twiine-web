import { useState } from 'react';
import { Minus, Plus } from 'iconoir-react';

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
          {isOpen ? <Minus width={25} height={25} /> : <Plus width={25} height={25} />}
        </span>
      </button>

      {isOpen && (
        <p className="mt-2 text-tertiary text-left transition-all duration-300 md:w-[80%]">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
