import CommonButton from '@/components/utilities/CommonButton'
import Image from 'next/image'
import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa'

function Footer () {
  return (
    <section>
      <div className='bg-[#FAF1FF] flex justify-center items-center text-center section__top__space'>
        <div className='flex flex-col items-center py-[10vh]'>
          {/* Logo */}
          <div>
            <Image
              src='/Staffsynk-logo.png'
              height={50}
              width={75}
              alt='Staffsynk-logo'
            />
          </div>

          {/* Social Media Icons */}
          <div className='flex gap-x-2 my-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='sn__footer__socail__icon'
            >
              <FaFacebook size={20} />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='sn__footer__socail__icon'
            >
              <FaTwitter size={20} />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='sn__footer__socail__icon'
            >
              <FaInstagram size={20} />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='sn__footer__socail__icon'
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='sn__footer__socail__icon'
            >
              <FaGithub size={20} />
            </a>
          </div>

          {/* Subscribe email */}
          <div className='flex gap-5 my-4 items-center'>
            <input
              className='w-[20vw] h-[4vh] border border-black/50 rounded-md text-black/80 italic outline-none p-2'
              placeholder='Type Your Email Here'
              type='text'
            />
            <CommonButton
              btnText='Get Started'
              btnLink='#'
              btnStyle='gradient'
            />
          </div>
        </div>
      </div>
        <div className='py-5 border-t-[1px] text-center bg-[#FAF1FF]'>
          <p>Copyright @ 2024 ethicalden.com All Rights Reserved</p>
        </div>
    </section>
  )
}

export default Footer
