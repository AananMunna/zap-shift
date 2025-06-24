import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    },
    {
      question: "Is it suitable for all ages and body types?",
      subQuestions: [
        "Does it really help with back pain and posture improvement?",
        "Does it have smart features like vibration alerts?",
        "How will I be notified when the product is back in stock?"
      ]
    },
    {
      question: "How long should I wear it each day?",
      answer: "We recommend starting with 30-60 minutes per day and gradually increasing as your body adjusts."
    },
    {
      question: "Can I wear it under clothing?",
      answer: "Yes, our posture corrector is designed to be discreet and can be worn under most clothing."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day money-back guarantee if you're not completely satisfied."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-lg text-gray-600">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-8">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 ${activeIndex === index ? 'bg-white shadow-sm' : 'bg-white'}`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`px-6 pb-4 ${activeIndex === index ? 'block' : 'hidden'}`}>
                {faq.answer && <p className="text-gray-600">{faq.answer}</p>}
                {faq.subQuestions && (
                  <ul className="mt-3 space-y-2">
                    {faq.subQuestions.map((subQ, subIndex) => (
                      <li key={subIndex} className="text-gray-600 flex items-start">
                        <span className="text-gray-400 mr-2 mt-1">•</span>
                        {subQ}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* See More FAQ's */}
        <div className="text-center">
          <button className="inline-flex items-center px-5 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            See More FAQ's
            <span className="ml-2 bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
              71
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;