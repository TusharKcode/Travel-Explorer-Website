import React, { useState } from 'react'

const faqs = [
        {
            question: "How do I book a travel package?",
            answer: "You can explore our packages on the 'Packages' page and click on the 'Book Now' button to confirm your booking."
        },
        {
            question: "Is it safe to book through Travel Explorer?",
            answer: "Absolutely! We prioritize customer security and partner only with verified travel agencies and hotels."
        },
        {
            question: "Can I cancel or modify my bookings?",
            answer: "Yes, you can modify or cancel your bookings by contacting our support teams at least 48 hours before your trip."
        },
        {
            question: "Do you offer international travel packages?",
            answer: "Yes, We offer both domestic and international packages. Check out the 'Destinations' page for more details."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can use the contact form on our 'Contact' page or email us at 'support@travelexplorer.com' ."
        }
    ];


export default function FAQSection() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
  return (
    <section className='py-16 bg-gray-50' id='faq'>
        <div className='max-w-5xl mx-auto px-6'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900'>
                Frequently Asked Questions
            </h2>

            <div className='space-y-4'>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className='bg-white shadow-md rounded-lg p-5 cursor-pointer transition'
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className='flex justify-between items-center'>
                            <h3 className='text-lg font-semibold text-blue-600'>
                                {faq.question}
                            </h3>
                            <span className='text-gray-500 text-xl'>
                                {openIndex === index ? "-" : "+"}
                            </span>
                        </div>
                        {openIndex === index && (
                            <p className='mt-3 text-gray-700 leading-relaxed'>
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
