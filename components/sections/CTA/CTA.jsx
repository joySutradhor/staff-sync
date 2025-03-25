import cta from '@/public/assets/CTA/cta.png'
import Image from 'next/image'
import appStore from '@/public/assets/CTA/appStore.png'
import CommonButton from '@/components/utilities/CommonButton'
import { LuDownload } from 'react-icons/lu'

function CTA () {
  return (
    <section className=' containerSpace section__top__space text-white'>
      <div className='grid grid-cols-2 items-center bg__gradient p-20 gap-10  relative  rounded-md'>
        <div className='space-y-5'>
          <h2>Optimize Your Workforce with Staffsynk !</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            odio eaque eum reprehenderit alias quis necessitatibus facilis
            vitae, quas aperiam beatae mollitia minus obcaecati, molestias
            voluptates. Eligendi architecto doloribus optio.
          </p>
          <div className='flex gap-10 items-center'>
          <CommonButton
            btnText='Download Now'
            btnLink='#'
            btnStyle='not__gradient'
            icon={LuDownload}
          />
            <Image
              src={appStore}
              width={300}
              height={100}
              alt='app store'
            ></Image>
          </div>
       
        </div>
        <div className=' '>
          <Image
            src={cta}
            className=' scale-[200%] object-cover -mt-24'
            alt='cta image'
          ></Image>
        </div>
      </div>
    </section>
  )
}

export default CTA
