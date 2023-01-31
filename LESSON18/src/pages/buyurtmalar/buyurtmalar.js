import React, { useState } from "react"
import { useForm } from "react-hook-form";
import Rodal from "rodal";
import 'rodal/lib/rodal.css';


export default function Buyurtmalar() {

    const [modal, setModal] = useState(false);
    const [array, setArray] = useState([]);
    const {register, handleSubmit, reset} = useForm()
    const [current, setCurrent] = useState("")
    const [count, setCount] = useState(0)
    const [ser, setSer] = useState([...array])

    const [pr, setpr] = useState(0)


// function handleChange(e){
// let x=e.target.files[0]
// const reader=new FileReader()
// reader.readAsDataURL(x)
// reader.onload=()=>{
//   setImg(reader.result)  
// }}
    function modalClose(params) {
        setModal(false);
    }

    function add(params) {
        setModal(true)
    }

    function mySubmit(params) {
        if (current==="") {
        array.push(params)
            
        } else {
            array[current] = params
            setCurrent("")
        }

        setArray([...array])
        setSer([...array])


        reset({
            name:"",
            price:"",
            time:"",
            date:"",
            color1:""
        })
        setModal(false);


    }

    function del(params) {
        array.splice(params, 1)
        setArray([...array])
    }

    function edit(params) {
        setModal(true)
        let a = array[params]
        reset(a)
        setCurrent(params)
    }

    function plus(params) {
        setCount(count+1)
        
        setpr(pr+Number(array[params].price))
    }

    function minus(params) {
        setCount(count-1)

        setpr(pr-Number(array[params].price))

    }

    function style1(params) {
        let b = params.target.checked;
        if (b) {
            document.getElementById("root").style.background = "red"
        } else {
            document.getElementById("root").style.background = ""
            
        }
    }

    function search1(params) {
        let f = params.target.value;
        let filt = array.filter((item)=>item.name.toLowerCase().includes(f.toLowerCase()))
        setSer(filt);
    }

    function pricee1(params) {
        
    }

    return (
        <div>
        <header className="header1">
            <h1>LOGO</h1>
            <input onChange={(event)=>search1(event)} type="text"   placeholder="SEARCH by name"/>
            <button className="btn btn-success" onClick={add}>Add product</button>
            <div onClick={pricee1} className="circle"> {pr} <h4 style={{float:"right"}}>{count}</h4></div>

            <div style={{display:"none"}}>
                    <div></div>
            </div>

            <input className="vdf" onChange={style1} type="checkbox" />
        </header>

        <Rodal visible={modal} onClose={modalClose} >
                <div>
                    <form action="" onSubmit={handleSubmit(mySubmit)}>
                        <select className="form-control my-3" {...register("types", {required:true}) }>
                            <option value="select"> ---Select type of food---</option>
                            <option value="FastFood">FastFood</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Fruits">Fruits</option>
                            <option value="MeatProducts">MeatProducts</option>
                        </select>
                        <input {...register("name")} className="form-control my-2" type="text" placeholder="ProductName"/>
                        <input {...register("price")} className="form-control" type="text" placeholder="ProductPrice"/>
                        <input {...register("time")} className="mx-1"  type="time" />
                        <input {...register("date")} className="mx-1"  type="date" />
                        <input {...register("color1")} className="mx-1 my-1" type="color" />
                        <button className="btn btn-success my-1">Save</button>
                    </form>
                </div>
        </Rodal>
       
        <div >
                <div className="mainn1">
                    {
                        array.map((item, index)=>(
                            <div style={{background:item.color1}} className="cartcha">
                                <h3>{item.types}</h3>
                                <h3>{item.name}</h3>
                                <h3>{item.price}</h3>
                                <h3>{item.time}</h3>
                                <h3>{item.date}</h3>
                                <div>
                                    <button className="btn btn-danger mx-3 my-3" onClick={()=>del(index)}>🗑️</button>
                                    <button className="btn btn-warning " onClick={()=>edit(index)}>✏️</button>
                                </div>

                                <div>
                                    <button className="btn btn-info mx-3" onClick={()=>plus(index)}>✅</button>
                                    <button className="btn btn-secondary " onClick={()=>minus(index)}>⭕</button>

                                </div>
                            </div>
                        ))
                    }
                </div>
        </div>

        
        
        </div>
    )

    
}

