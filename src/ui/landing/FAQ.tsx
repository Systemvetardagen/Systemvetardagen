import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FadeInSection } from "../layout";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const { t } = useTranslation("faq");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const questions = t("questions", { returnObjects: true }) as FAQItem[];
  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
      <FadeInSection direction="fadeLeft" className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("header")}
          </h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: FAQItem) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between cursor-pointer"
                aria-expanded={openItems.has(item.id)}
                aria-controls={`faq-answer-${item.id}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openItems.has(item.id) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-500 ${
                  openItems.has(item.id)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
  );
};

export default FAQ;
