import React from "react";
import { Link, } from 'react-router-dom'
export default function Admin(props){
    return(
        <div className="menu">
           <div className="logo">
            <div className="foto"></div>
            <div className="nomi">
            <h3 className="h3"><b> Fast Food</b></h3>
            <p className="p">Online maxsulot sotuvi</p>
            
            </div>
           </div>
           <div className="btn-group1">
           <Link to={'/buyurtmalar'}>
                <button form="form-group1" className="btn1">🕑Buyurtmalar</button>
            </Link>                     
            <Link to={'/mahsulotlar'}>
                <button form="form-group1" className="btn1">🍔Maxsulotlar</button>
            </Link>
            <Link to={'/kategoriyalar'}>
                <button form="form-group1" className="btn1">⚖️Kategoriyalar</button>
            </Link>
            <Link to={'/filiallar'}>
                <button form="form-group1" className="btn1">🌇Filiallar</button>
            </Link>
            <Link to={'/mijozlar'}>
                <button form="form-group1" className="btn1">🧔🏻Mijozlar</button>
            </Link>
            <Link to={'/xisobot'}>
                <button form="form-group1" className="btn1">🖨Xisobot</button>
            </Link>
           </div>
        </div>
    )
}