import React from 'react'
import './style.css'
function Card(props) {
  return (
    <div className='wrapper'>
        <img style={{width:"400px",height:"300px"}} src={props.src} alt="banan" />
        <h1>{props.title}</h1>
        <h4>{props.info}</h4>
    </div>
  )
}

export default Card