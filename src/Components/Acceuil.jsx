import React from 'react'
import './Acceuil.css'
import { Routes, Route } from 'react-router-dom'
import ListUser from "./ListUser"
import DetailsUser from "./DetailsUser";
import ListPosts from "./ListPosts";
export default function Accueil() {
    return (
        <div>
            <div className='titre'>Gestion des posts</div>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/DetailsUser/:id' element={<DetailsUser />} />
                <Route path='/ListPosts/:id' element={<ListPosts/>} />
            </Routes>
        </div>
    )
}
