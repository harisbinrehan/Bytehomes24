import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const DevelopmentServices = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='development-process'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Proven development flow <br className='sm:block hidden'/> with flawless code quality.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our development methodology goes beyond traditional problem-solving techniques.
          We combine cutting-edge technology with innovative thinking to deliver
          punctual projects that drive financial success and market growth.
        </p>
        {/* <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='enterprise-solutions'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='business-solutions'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div> */}
      </div>  
    </section>
  )
}

export default DevelopmentServices