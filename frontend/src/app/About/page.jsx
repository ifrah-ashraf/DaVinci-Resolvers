'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Generalised from '../generalised/page';
import Navbar from '../components/Navbar';
function About() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      paragraphRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);
  return (
    <div id="about" className='h-[100vh]'>
    
      <div>
        <ul>
          <li className=''><div className=" w-[400px] md:w-[800px]"><h1 className='  text-3xl md:text-5xl font-bold text-orange-400  mt-[100px] md:mt-[200px] ml-[50px] md:ml-[200px]'>
            Nourish your body, 
            </h1>
            <h1  className=' text-3xl md:text-5xl font-bold text-orange-400 mt-[20px] ml-[50px] md:ml-[200px]'>Nurture Your Baby
              </h1>
              <p  ref={paragraphRef} className=' ml-[30px] md:ml-[240px] mt-[40px] font-semibold text1 w-[400px]'>Empower yourself with knowledge and <br></br>
                make choices that are best for you and your baby.</p></div></li>
          <li>
            <div>
<Image src="/images/first.avif" width={400} height={400}  className=' -ml-[20px] md:ml-[850px]  mt-[40px] md:-mt-[250px] rounded-lg'>

</Image>
            </div>
          </li>
        </ul>
        <Generalised />
      </div>
    </div>
  )
}

export default About