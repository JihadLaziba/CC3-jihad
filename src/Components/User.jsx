import React from 'react'
import './User.css'

export default function User(props) {
  return (
    <div className='user'>
        <img src={props.image}  />
        <div>
            <div className='Name'>{props.nom}</div>
            <button onClick={props.details}>Detail User</button>
            <button onClick={props.listPosts}>Liste des Posts</button>
        </div>
    </div>
  )
}
