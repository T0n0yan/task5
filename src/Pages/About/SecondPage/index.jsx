import React from 'react'
import './style.scss'
import '../../../assets/Style/flex.scss'
import '../../../assets/Style/Global.scss'
import '../../../assets/Style/background.scss'



const SecondPage = (props) => {
    const aboutPost = props.aboutPost
  return (
    <div className='secondContainer  G-direction-aline-justify'>
        <div  className='G-bg-image-center' style={{backgroundImage:`url("${aboutPost.img}")`}} />
        <span>{aboutPost.title}</span>
    </div>
  )
}

export default SecondPage