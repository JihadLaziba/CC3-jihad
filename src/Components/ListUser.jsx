import React from 'react'
import './ListUser.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import User from "./User";
import Accueil from "./Acceuil";

export default function ListUser() {
    const navigate = useNavigate()
    const { data } = useSelector(state => state.user)
    return (
        <div className='users'>
            {data.length != 0 && data.users.map(user => <User key={user.id} image={user.image} nom={`${user.firstName} ${user.lastName}`} details={e => navigate(`/DetailsUser/${user.id}`)} listPosts={e => navigate(`/ListPosts/${user.id}`)} />)}
        </div>
    )
}
