import React from 'react'
import Marquee from "react-fast-marquee";

function Testimonial () {
  const testimonials = [
    {
      id: 1,
      review:
        "This app has completely transformed how we manage our team. It's intuitive, fast, and incredibly reliable.",
      image: '/assets/about/about-staff-synk.png', // Placeholder image
      name: 'John Doe',
      designation: 'CEO, TechCorp'
    },
    {
      id: 2,
      review:
        "I can't imagine working without this app. It's user-friendly and the support team is amazing!",
      image: '/assets/about/about-staff-synk.png', // Placeholder image
      name: 'Jane Smith',
      designation: 'Project Manager, DesignCo'
    },
    {
      id: 3,
      review:
        'A must-have app for businesses looking to streamline operations. Highly recommend it to anyone!',
      image: '/assets/about/about-staff-synk.png', // Placeholder image
      name: 'Sarah Lee',
      designation: 'Founder, Innovate Ltd.'
    },
    {
      id: 4,
      review:
        "This app helped us increase our productivity by 30%. It's easy to use, and the features are top-notch.",
      image: '/assets/about/about-staff-synk.png', // Placeholder image
      name: 'Michael Brown',
      designation: 'CTO, DevWorks'
    }
  ]

  return (
    <section id='testimonial'>
      <div className='section__top__space'>
        <div className='text-center'>
          <h1 className='text__gradient text-center'>What Our Clients Say</h1>
          <p className='sn__testimonial__subTitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            amet vitae nostrum vel, quis error similique? Saepe quae est quam?
          </p>
        </div>

        {/* marquee card for testimonial */}

        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className='bg-white p-6 rounded-lg shadow border border-black/10 w-[25vw] h-[25vh] mx-1 mt-10'
            >
              <div className='flex justify-between items-center mb-4'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='size-20 rounded-full object-cover'
                />
                <div>
                  <h3 className='font-bold text-lg'>{testimonial.name}</h3>
                  <p className='text-gray-500'>{testimonial.designation}</p>
                </div>
              </div>
              <p className='text-gray-600 italic mb-4'>{testimonial.review}</p>
            </div>
          ))}
        </Marquee>

        <Marquee speed={50} gradient={false} pauseOnHover={true} direction='right'>
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className='bg-white p-6 rounded-lg shadow border border-black/10 w-[25vw] h-[25vh] mx-1 mt-2'
            >
              <div className='flex justify-between items-center mb-4'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='size-20 rounded-full object-cover'
                />
                <div>
                  <h3 className='font-bold text-lg'>{testimonial.name}</h3>
                  <p className='text-gray-500'>{testimonial.designation}</p>
                </div>
              </div>
              <p className='text-gray-600 italic mb-4'>{testimonial.review}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Testimonial
