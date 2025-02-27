import React from 'react'

import Link from 'next/link'
import Options from './Option'
function Navbar() {
  return (
    <div>
      <div className='flex justify-between -mt-[1px] bg-white text-black'>
        <ul>
          <li className="ml-[40px]"><img src="images/logo.png" alt="" srcset="" className="w-[50px] rounded-full" /></li>
        </ul>
        <ul className='flex gap-6'>
        <Link href="/" className="font-semibold hover:text-orange-500" >HOME</Link>
        <Link href="/About" smooth={true} duration={500}><li  className='hover:text-orange-500 font-semibold'>ABOUT US</li></Link>
          <Link href='/Services' ><li  className='hover:text-orange-500 font-semibold'>SERVICES</li></Link>
        <Link href='/Contact'><li  className='hover:text-orange-500 font-semibold mr-[30px]'>CONTACT US</li></Link>  
      
        </ul>
      </div>
    </div>
  )
}

export default Navbar