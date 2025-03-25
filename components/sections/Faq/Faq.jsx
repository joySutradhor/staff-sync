'use client'
import CommonButton from '@/components/utilities/CommonButton'
import Link from 'next/link'
import { useState } from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleAccordion = index => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className='containerSpace section__top__space' id='faq'>
      <div className='text-center'>
        <h2 className=' text__gradient text-center '>
          Frequently Asked Question
        </h2>
        <p className='px-[15vw] pt-5 pb-10'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown
        </p>
      </div>

      <div className='grid grid-cols-2 items-center gap-[5vw]  text-black/80 '>
        {/* FAQ Section */}
        <div className=''>
          <div className='space-y-4'>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`bg-[#F2F2F2] rounded-lg overflow-hidden ${
                  activeIndex === index ? 'bg-[#F2F2F2]' : ''
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className='w-full text-left px-4 py-3 flex justify-between items-center '
                >
                  <span className=' text-xl font-semibold text-black/80'>
                    {faq.question}
                  </span>
                  <span className='text-black/80'>
                    {activeIndex === index ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className='px-4 py-2 text-black/80'>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className='bg-linear-to-l from-[#C469FF] to-[#28004F] rounded-lg p-6 shadow w-[90%]'>
          <div className='space-y-4'>
            {/* First Name */}
            <div className='flex flex-col'>
              <label className='text-lg font-semibold text-white'>
                First Name
              </label>
              <input
                type='text'
                className='p-2 mt-1 border border-gray-300 rounded-md  text-white outline-none'
                placeholder='Enter your first name'
              />
            </div>

            {/* Last Name */}
            <div className='flex flex-col'>
              <label className='text-lg font-semibold text-white'>
                Last Name
              </label>
              <input
                type='text'
                className='p-2 mt-1 border border-gray-300 rounded-md text-white  outline-none'
                placeholder='Enter your last name'
              />
            </div>

            {/* Email */}
            <div className='flex flex-col'>
              <label className='text-lg font-semibold text-white'>
                Email
              </label>
              <input
                type='email'
                className='p-2 mt-1 border border-gray-300 rounded-md text-white  outline-none'
                placeholder='Enter your email'
              />
            </div>

            {/* Message */}
            <div className='flex flex-col'>
              <label className='text-lg font-semibold text-white'>
                Message
              </label>
              <textarea
                className='p-2 mt-1 border border-gray-300 rounded-md text-white  outline-none'
                placeholder='Write your message'
                rows='2'
              />
            </div>

            {/* Submit Button */}
            <div>
              <CommonButton
                btnText='Submit Now'
                btnLink='#'
                btnStyle='not__gradient'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const faqData = [
  {
    question: 'What is Staffsynk? ?',
    answer:
      'Staffsync is an EdTech platform offering innovative and accessible learning solutions.'
  },
  {
    question: 'How do I enroll in What is Staffsynk? ?',
    answer:
      'Simply sign up, browse courses, and follow the easy registration process to get started.'
  },
  {
    question: 'Do Staffsync courses come with certificates?',
    answer:
      'Yes, Staffsync provides certificates upon successful course completion.'
  },
  {
    question: 'Is there tutor support available on Staffsync ?',
    answer:
      'Yes, expert tutors are available to guide and support you throughout your learning journey.'
  },
  {
    question: 'How do I make payments for Staffsync courses?',
    answer:
      'Payments can be made securely using credit/debit cards, digital wallets, or other online methods.'
  },
  {
    question: 'Are Staffsync courses suitable for beginners?',
    answer:
      'Absolutely, Staffsync offers beginner-friendly courses designed for learners with no prior experience.'
  }
]

export default Faq
