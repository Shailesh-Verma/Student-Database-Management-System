import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Home = () => {
let [student,setStudent]=useState({
    sname:"",
    semail:"",
    mobile:"",
    gender:"",
    address:"",
    course:""
})
let navigate=useNavigate()
let {sname,semail,mobile,gender,address,course}=student
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
        else if(mobile===""){
            alert("Mobile field is empty please fill it")
        }
        else{
            let payload={
            sname,
            semail,
            mobile,
            gender,
            address,
            course
        }
        axios.post("http://localhost:5000/student",payload)
        navigate("/view")
        toast.success('Successfully Added!')
       }
    }
       catch(e){
        console.log(e)
       }
       finally{
        setStudent({
            sname:"",
            semail:"",
            mobile:"",
            gender:"",
            address:"",
            course:""
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
    <h1 className='mainHead'>WELCOME TO HOME PAGE</h1>
    <div className='container'>
    <form action="" onSubmit={submitHandle}>
    <legend className='subHead'>
        ADD STUDENT DETAILS
    </legend>
    <div className='field'>
       Name: <input type="text"  value={sname} name="sname" onChange={handleChange}/>
    </div>
    <div className='field'>
      Email: <input type="text"  value={semail} name="semail" onChange={handleChange} />
    </div>
    <div className='field'>
      Mobile:<input type="number"  value={mobile} name="mobile" onChange={handleChange}/>
    </div>
    <div className='field'>
         Gender:<input type="radio" name="gender" value="male" checked={gender === "male"} onChange={handleChange} /> Male

            <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={handleChange} /> Female
    </div>
    <div className='field'>
       Address:<input type="text"  value={address} name="address" onChange={handleChange}/>
    </div>
    <div className='field'>
       Course: <input type="text"  value={course} name="course" onChange={handleChange}/>
    </div>
    <div>
        <button className='btnAdd'>Add Student</button>
    </div>
</form>

    </div>
    </>
  )
}

export default Home