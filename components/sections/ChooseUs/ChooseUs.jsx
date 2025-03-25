import React from 'react'
import { FaCheckCircle, FaMobileAlt, FaCog, FaShieldAlt } from 'react-icons/fa'

function ChooseUs () {
  const cards = [
    {
      id: 1,
      icon: <FaCheckCircle />,
      title: 'Fast Performance',
      subtitle: 'Our app delivers a smooth and fast user experience.',
      color: 'bg-[#4e2e8c]'
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: 'Mobile Optimized',
      subtitle: 'Fully optimized for mobile devices for all screen sizes.',
      color: 'bg-green-500'
    },
    {
      id: 3,
      icon: <FaCog />,
      title: 'Customizable Features',
      subtitle: 'Easily customize the app to suit your personal needs.',
      color: 'bg-orange-500'
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: 'Secure & Safe',
      subtitle: 'We prioritize your security and data privacy.',
      color: 'bg-red-500'
    }
  ]

  return (
    <section className='containerSpace section__top__space' id='chooseUs'>
      <div className='text-center'>
        <h2 className='text__gradient'>Why Choose Us</h2>
        <p className='sn__choose__subTitle'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
          laboriosam provident id expedita quasi nam esse animi nihil fugiat
          iure?
        </p>
      </div>

      {/* why choose us cards  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
        {cards.map(card => (
          <div
            key={card.id}
            className={`p-6 rounded-md shadow-lg text-white ${card.color}`}
          >
            <div className='text-4xl mb-4'>{card.icon}</div>
            <h3 className='text-xl font-bold mb-2'>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ChooseUs
