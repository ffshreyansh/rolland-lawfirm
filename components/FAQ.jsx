import React, { useState } from 'react';

const FAQs = [
    {
        question: 'What is Lorem Ipsum?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        question: 'Why do we use it?',
        answer: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
        question: 'Where can I get some?',
        answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        question: 'Is it free?',
        answer: 'Yes, it is free to use for anyone who wants to use it for various purposes.',
    },
];

const FAQ = ({ question, answer }) => {
    const [showFAQ, setShowFAQ] = useState(false);

    const handleFaq = () => {
        setShowFAQ(!showFAQ);
    };

    return (
        <div className="w-full py-10 border-b-2">
            <div
                className="flex items-center justify-between text-xl font-medium uppercase cursor-pointer "
                onClick={handleFaq}
            >
                <span className={showFAQ ? ' text-4xl' : 'text-4xl text-gray-400'}>{question}</span>
                {
                    showFAQ ? <i class="fa-solid fa-angle-up "></i> : <i class="fa-solid fa-angle-down text-gray-400"></i>
                }
            </div>
            <div
                className={`transition transition-max-h duration-300 ${showFAQ ? 'h-fit' : 'max-h-0'} overflow-hidden`}
            >
                <p className={`transition-opacity py-5 text-gray-400 font-medium ${showFAQ ? 'pb-0 opacity-100' : 'opacity-0'}`}>
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQList = () => {
    return (
        <>
            <div className="p-14   font-inter">
                <h5 className="text-2xl font-medium mb-3">FAQs</h5>
                <h1 className="font-medium text-3xl lg:text-8xl ">COMMON QUESTIONS</h1>
                <div className="mt-24">
                    <div className="flex flex-col items-center justify-between">
                        {FAQs.map((item, index) => (
                            <FAQ key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQList;
