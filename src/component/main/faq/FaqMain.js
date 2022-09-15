import React from "react";
import SingleFaq from "./SingleFaq";

export default function FaqMain() {
  const faqs = [
    {
      _id: 1,
      number: 1,
      question: `Question One`,
      answer: `This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.`,
    },
    {
      _id: 2,
      number: 2,
      question: `Question Two`,
      answer: `This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.`,
    },
    {
      _id: 3,
      number: 3,
      question: `Question Three`,
      answer: `This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.`,
    },
    {
      _id: 4,
      number: 4,
      question: `Question Four`,
      answer: `This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.`,
    },
  ];
  return (
    <main class="w-100 mx-auto my-5">
      {faqs.map((faq) => (
        <SingleFaq
          id={faq.number}
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </main>
  );
}
