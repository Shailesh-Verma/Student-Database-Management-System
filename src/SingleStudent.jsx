import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleStudent = () => {
    let [student,setStudent]=useState('')
    let navigate=useNavigate()
    let {id}=useParams()
    console.log(id)
    let getApi=async()=>{
        let {data}=await axios.get("http://localhost:5000/student/"+id);
        setStudent(data)
    }
    console.log(student)

    let gotohome=()=>{
        navigate('/')
    }
    let goback=()=>{
        navigate(-1)
    }
    useEffect(()=>{
        try{
            getApi();
        }
        catch(e){
            console.log(e)
        }
    },[])
  return (
    <>
    <section className='mainStuContainer'>
    <h1 style={{ color: 'blue' }}>Detail of <span style={{ color: 'red' }}>{student.sname}</span></h1>
    <article className='subStuContainer'>
        <h1>SL No     : <span style={{ color: 'navy' }}>{student.id}</span></h1>
        <h1>Name      : <span style={{ color: 'navy' }}>{student.sname}</span></h1>
        <h1>Email     : <span style={{ color: 'navy' }}>{student.semail}</span></h1>
        <h1>Mobile no : <span style={{ color: 'navy' }}>{student.mobile}</span></h1>
        <h1>Gender    : <span style={{ color: 'navy' }}>{student.gender}</span></h1>
        <h1>Address   : <span style={{ color: 'navy' }}>{student.address}</span></h1>
        <h1>Course    : <span style={{ color: 'navy' }}>{student.course}</span></h1>
        <div className='btn'>
            <button onClick={gotohome}>Go To Home</button>
            <button onClick={goback}>Go-Back</button>
        </div>
    </article>
</section>
    </>
  )
}

export default SingleStudent

//! useParams--->Hook--->react-router-dom

// We can fetch the parameter or the value present in the url by destructuring