import React from 'react'

const Button = ({ title, classDetail, onClick = '' }) => {
  return (
    <button
      className={`bg-primary text-white uppercase px-7 py-2 rounded-lg hover:bg-secondary hover:text-primary duration-200 cursor-pointer ${classDetail}`}
    onClick={onclick}
    >
      {title}
    </button>
  )
}

export default Button
