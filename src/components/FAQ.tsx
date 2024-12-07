import React from 'react';

const faqs = [
  {
    question: "What is a Darakaraka Calculator?",
    answer: "A Darakaraka Calculator is a Vedic astrology tool that determines your career and professional indicators based on planetary positions in your birth chart. It identifies the planet with the highest degree, which becomes your Darakaraka."
  },
  {
    question: "How accurate is the Darakaraka calculation?",
    answer: "The calculation is mathematically accurate based on the planetary degrees you input. The accuracy of your results depends on having the correct birth chart details."
  },
  {
    question: "Where can I find my planetary degrees?",
    answer: "You can find your planetary degrees in your birth chart (kundli). Many online websites provide free birth chart calculations if you know your birth date, time, and location."
  },
  {
    question: "What does each planet signify as Darakaraka?",
    answer: "Each planet as Darakaraka indicates different career paths. For example, Sun suggests leadership roles, Moon indicates public service, Mars suggests technical or military careers, and Mercury points towards communication-based professions."
  },
  {
    question: "How often should I calculate my Darakaraka?",
    answer: "Your Darakaraka is fixed based on your birth chart, so you only need to calculate it once. It doesn't change throughout your life."
  },
  {
    question: "Can I have multiple Darakarakas?",
    answer: "No, you can only have one Darakaraka. It's always the planet with the highest degree in your birth chart."
  }
];

export default function FAQ() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Darakaraka Calculator</h2>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}