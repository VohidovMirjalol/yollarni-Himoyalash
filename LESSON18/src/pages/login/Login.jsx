import React from "react";
import { Link } from 'react-router-dom'

export default function Login(props){
   

    return(
        <div>
                   
                   <div className="card w-50 m-auto">
            <div className="card-hedaer bg-dark text-white text-center">
<h1>Login</h1>
            </div>
            <div className="card-body ">
<form id="form-group1">
    <input  className="form-control my-2 " type="email" placeholder="email..." />
    <input className="form-control my-2" type="password" placeholder="password..." />
   
</form>
            </div>
            <div className="card-footer">
                <Link to={'/signup'}>create your account!</Link>
                <br/>
                <hr/>
                <Link to={'/signup'}>
                <button form="form-group1" className="btn btn-success">login</button>
            </Link>
         
                </div>
        </div>
        </div>
    )
}

