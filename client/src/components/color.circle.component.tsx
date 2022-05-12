import React from 'react'
import '../styles/color.circle.style.scss'
interface Props{
    color : string
}

const ColorCircle = (params : Props) => {
  return (
    <div className='color-circle' style={{backgroundColor : `${params.color}`}} ></div>
  )
}

export default ColorCircle