import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const DevelopmentProcess = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Experience transformative results <br className='sm:block hidden'/>in a seamless process.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our proven development methodology delivers flawless code quality and punctual project completion.
          We combine technical expertise with innovative thinking to help you
          achieve market growth and financial success at scale.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='development-process'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default DevelopmentProcess