import React from 'react'
import './style.scss'
import '../../../assets/Style/flex.scss'
import '../../../assets/Style/Global.scss'
import '../../../assets/Style/background.scss'



const SecondPage = (props) => {
    const aboutPost = props.aboutPost
  return (
    <div className='secondContainer  G-direction-aline-justify'>
        <span  className={aboutPost.icon} />
        <p>{aboutPost.title}</p>
    </div>
  )
}

export default SecondPage