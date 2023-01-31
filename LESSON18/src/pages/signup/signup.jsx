import React   from "react";
import { Link,useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from "axios";
export default function SignUp(props){
const {register,handleSubmit}=useForm()
const navigate=useNavigate()


function mySubmit(data){
  if(data.password===data.repeatPassword){
    axios({
        url:"http://localhost:3001/users",
        method:"post",
        data
    }).then((res)=>{
        console.log(res.data);
        navigate('/login')
    })
  }
  else{
    alert("kod xato ")
  }
 
}
return(
<div className="container ">
        <div className="card w-50 m-auto">
            <div className="card-hedaer bg-dark text-white text-center">
<h1>SignUp</h1>
            </div>
            <div className="card-body ">
<form id="form-group1" onSubmit={handleSubmit(mySubmit)}>
    <input {...register('firstname')} className="form-control my-2 " type="text" placeholder="firstname..." />
    <input {...register('lastname')} className="form-control my-2" type="text" placeholder="lastname..." />
    <input {...register('age')} className="form-control my-2" type="number" placeholder="age..." />
    <input {...register('email')} className="form-control my-2" type="email" placeholder="email..." />
    <input {...register('phone')} className="form-control my-2" type="number" placeholder="phone..." />
    <input {...register('password')} className="form-control my-2" type="password" placeholder="password..." />
    <input {...register('repeatPassword')} className="form-control my-2" type="password" placeholder="repeat password..." />
</form>
            </div>
            <div className="card-footer">
                <Link to={'/login'}>login-page</Link>
                <br/>
                <hr/>
                <Link to={'/admin'}>
                <button form="form-group1" className="btn btn-success">SignUp</button>
            </Link>
            
                </div>
        </div>           
</div>
    )
}