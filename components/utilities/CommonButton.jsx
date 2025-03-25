import Link from 'next/link'
import React from 'react'

function CommonButton({btnText , btnLink , btnStyle , icon:Icon}) {
  return (
    <div>
        <Link href={btnLink}><button className={`${btnStyle} py-2 px-6 rounded-md font-semibold flex gap-2 items-center`}>{btnText}
          
          {
            Icon&& <span className='animate-pulse'><Icon/></span>
          }
          </button></Link>
    </div>
  )
}

export default CommonButton