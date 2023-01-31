import React from "react";
import Rodal from "rodal";
import { useState } from "react";
import {useForm} from 'react-hook-form'
import 'rodal/lib/rodal.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Xispbot(){
  const { register, handleSubmit, reset } = useForm();

const [users,setUsers]=useState([])
let [modal,setModal]=useState(false)

function HandleModal(){
  setModal(true)
}
function mySubmit(data){
users.push(data)
reset()
setModal(false)
}
function daletItem(DELL){
  users.splice(DELL,1);
  setUsers([...users])
}
function closeModal(){
reset({
Filial:"",
Buyurtmasummasi:" ",
Mijoz:"",
Sana:"",
Soat:"",
Tell:"",
Operator:""
  })
  setModal(false)

}
 return(
<div className="container">
<div className="header">
<button onClick={HandleModal} className="btn btn-info mx-3 my-3" >Add</button>
<input className="search"  type={"text"} placeholder={'Qidirish...'}/>
<div className="filter"></div>

</div>
<br/>
<br/>

<div className="jadval" >
<table className= 'table '>
<thead className="table ">
  <tr>
    <th>FILIAL</th>
    <th>BUYURTMA SUMMASI</th>
    <th>MIJOZ</th>
    <th>SANA</th>
    <th>ACTION</th>
  </tr>
</thead>
<br/>
<br/>
<tbody>{
users.map((item,index)=>{
return(
<tr>
<td className="td"><b>{item.Filial}</b><br/><p>Opertor:{item.Operator}</p></td>
<td className="td"><b>{item.Buyurtmasummasi+"UZS"}</b><br/><li>Payme</li></td>
<td className="td"><b>{item.Mijoz}</b><br/><p>{item.Tell}</p></td>
<td className="td"><b>{item.Sana}</b><br/><p>{item.Soat}</p></td>
<td className="td"><button onClick={()=>daletItem(index)} className="btn btn-outline-info">X</button></td>
</tr>
  )})}
</tbody>
</table>
</div>
<Rodal visible={modal} onClose={closeModal}>
<form onSubmit={handleSubmit(mySubmit)}>
<input {...register("Filial")} className="form-control my-3 mx-2" type={"text"} placeholder={'Filial'}/>
<input {...register("Operator")} className="form-control my-3 mx-2" type={"text"} placeholder={'Operator'}/>
<input {...register("Buyurtmasummasi")} className="form-control my-3 mx-2" type={"number"} placeholder={'buyurtma summasi'}/>
<input {...register("Mijoz")} className="form-control my-3 mx-2" type={"text"} placeholder={'Mijoz'}/>
<input {...register("Tell")} className="form-control my-3 mx-2" type={"number"} placeholder={'Telephone number'}/>
<input {...register("Sana")} className="form-control my-3 mx-2" type={"date"}/>
<input {...register("Soat")} className="form-control my-3 mx-2" type={"time"}/>
<button className="btn btn-success" >save</button>
</form>
</Rodal>

</div>
 )
}