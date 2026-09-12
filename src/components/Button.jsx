import React from 'react'

const Button = (props) => {
  return (
    
      <button className='bg-primary text-white uppercase px-7 py-2 rounded-lg hover:bg-secondary hover:text-primary duration-200 cursor-pointer'>{props.title}</button> 
  )
}

export default Button
