import React from 'react'
const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt="Negrooo" />
      <h1>{props.user} Age: {props.age}</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium.</h3>
      <button>View Profile</button>
    </div>
  )
}

export default Card