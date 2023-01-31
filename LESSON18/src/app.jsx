import React from "react";
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import SignUp from './pages/signup/signup.jsx'
import Login from './pages/login/Login'
import Admin from './pages/Admin/Admin'
import PagenotFount from './pages/pagenotFount/pagenotFount'
import Buyurtmalar from './pages/buyurtmalar/buyurtmalar'
import Xisobot from './pages/xisobot/xisobot'

export default function App (){

    return(
        <div>




<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/PagenotFount" element={<PagenotFount/>}/>
    <Route path="/Admin" element={<Admin/>}/>
    <Route path="/buyurtmalar" element={<Buyurtmalar/>}/>
    <Route path="/xisobot" element={<Xisobot/>}/>

</Routes>
        </div>
    )
}




