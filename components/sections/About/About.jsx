import Image from 'next/image'
import aboutImage from '@/public/assets/about/about-staff-synk.png'
import ListContent from '@/components/utilities/about/ListContent'
import CommonButton from '@/components/utilities/CommonButton'
import { LuDownload } from 'react-icons/lu'

function About () {
  return (
    <section className='containerSpace section__top__space' id='about'>
      <div className='sn_about__container relative'>
        {/* image card */}
        <div className='relative'>
          <div>
            <Image
              src={aboutImage}
              alt='about image'
              width={550}
              height={100}
              className='z-20'
            />
          </div>
          {/* Red div placed directly below the image */}
          <div className='sn__about__background'></div>
        </div>

        {/* about content text */}
        <div>
          <div>
            <h2 className='text__gradient'>About Staffsynk</h2>
            <p className='pt-5'>
              Staffsynk is a powerful workforce tracking software designed to
              streamline office operations by accurately recording staff entry,
              exit, and daily work activities. With real-time monitoring and
              automated reporting, Staffsynk ensures efficient workforce
              management, improved accountability, and enhanced productivity.
            </p>
            {/* list content  */}
            <div className='sn__listContent__wrapper'>
              <ListContent />
            </div>

            {/* download button  */}
            <CommonButton
              btnText='Download Now'
              btnLink='#'
              btnStyle='gradient'
              icon={LuDownload}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
