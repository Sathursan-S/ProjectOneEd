import React from 'react'
import './Greeting.css'
const Greeting = ({ name}) => {
  return (
      <div className='Greeting'>
          <span>Good morning!</span>
          <span>{ name}</span>
    </div>
  )
}

export default Greeting