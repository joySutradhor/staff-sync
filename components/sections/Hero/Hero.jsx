import CommonButton from '@/components/utilities/CommonButton'
import Image from 'next/image'
import hero from '@/public/assets/hero/hero.webp'
import HeroAppInfo from '@/components/utilities/HeroAppInfo'
import { LuDownload } from "react-icons/lu";
import Link from 'next/link';


function Hero () {
  return (
    <section className='primary__bg sn__hero__content__parent'>
      <div className='containerSpace '>
        {/* navbar section  */}
        <nav className='sn__menu__wrapper'>
          <div className='sn__menu__parent'>
            <div>
              <Image
                src='/Staffsynk-logo.png'
                height={50}
                width={75}
                alt='Staffsynk-logo'
              ></Image>
            </div>
            <ul className='sn__menu__item__parent'>
              <Link href="#"><li>Home</li></Link>
              <Link href="#about"><li>About Us</li></Link>
              <Link href="#testimonial"><li>Testimonial</li></Link>
              <Link href="#chooseUs"><li>Choose Us</li></Link>
              <Link href="#faq"><li>Faq</li></Link>
              <Link href="#"><li>contact</li></Link>

            </ul>
            <div>
              <CommonButton
                btnText='Download App'
                btnLink='#'
                btnStyle='gradient'
                icon={LuDownload} 
              />
            </div>
          </div>
        </nav>

        {/* Hero main content section */}
        <section>
          <div className='sn__hero__main__contentParent'>
            <div>
              <h1 className='text__gradient'>
                Staffsynk - Smart Staff Management Made Easy
              </h1>
              <p className='sn__hero__para'>
                Staffsynk is a powerful workforce tracking software designed to
                streamline office operations by accurately recording staff
                entry, exit, and daily work activities. With real-time
                monitoring and automated reporting, Staffsynk ensures efficient
                workforce management, improved accountability, and enhanced
                productivity.
              </p>

              {/* hero btn text */}
              <div className='sn__hero__btn__parent'>
                <CommonButton
                  btnText='Get Started'
                  btnLink='#'
                  btnStyle='gradient'
                />
                <CommonButton
                  btnText='Download App'
                  btnLink='#'
                  btnStyle='not__gradient'
                  icon={LuDownload} 
                />
              </div>

              {/* hero app info  */}
              <HeroAppInfo />
            </div>
            {/* right side hero image */}
            <div>
              <Image
                src={hero}
                width={100}
                height={100}
                alt='hero image'
                layout='responsive'
              ></Image>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Hero
