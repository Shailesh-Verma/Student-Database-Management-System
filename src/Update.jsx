import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar'

const Update = () => {
let [student,setStudent]=useState({
    sname:"",
    semail:""
})
let navigate=useNavigate()

let {id}=useParams()
console.log(id)


let getApi=async()=>{
  let {data}=await axios.get("http://localhost:5000/student/"+id)
  console.log(data)
  setStudent(data)
}
useEffect(()=>{
  try{
    getApi()
  }
  catch(e){
    console.log(e)
  }
   
},[])
let {sname,semail}=student
    let submitHandle=(e)=>{
       e.preventDefault()
       console.log(student)
       try{
        if(sname==="" && semail===""){
            alert("Please fill both the fields")
        } 
        else if(sname===""){
            alert("Name field is empty please fill it")
        }
        else if(semail===""){
            alert("Email field is empty please fill it")
        }
        else{
            let payload={
            sname,
            semail
        }
        axios.put("http://localhost:5000/student/"+id,payload)
        navigate("/view")
       }
    }
       catch(e){
        console.log(e)
       }
       finally{
        setStudent({
            sname:"",
            semail:""
        }) 
       }
    }
    let handleChange=(e)=>{
        console.log(e)
        let {name,value}=e.target
        setStudent({...student,[name]:value})
    }
    
  return (
    <>
    <NavBar/> 
    <section className='mainBlock'>
    <h1>UPDATING PORTAL</h1>
    <form action="" onSubmit={submitHandle}>
        <legend>
            UPDATE STUDENT DETAILS
        </legend>
        <div>
            <input type="text" placeholder='Enter the name' value={sname} name="sname" onChange={handleChange}/>
        </div>
        <div>
            <input type="text" placeholder='Enter the email' value={semail} name="semail" onChange={handleChange} />
        </div>
        <div>
            <button className='btnedit'>Update Student</button>
        </div>
    </form>
    </section>
    </>
  )
}

export default Update