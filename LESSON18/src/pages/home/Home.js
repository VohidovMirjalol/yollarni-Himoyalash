import React from "react";
import { Link } from 'react-router-dom'
export default function Home(props){
    return(
        <div>
            <h1>Home</h1>
             <Link to={'/signup'}>
            <button className="btn btn-dark">SIGNUP</button>
            </Link>
            
        </div>
    )
}



