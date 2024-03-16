import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import { MdOutlineGridView } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";


const ViewAll = () => {
  let [student,setStudent]=useState([])

  // async and await----> handling the promise
  let getapi=async()=>{
    let {data}=await axios.get("http://localhost:5000/student");
    setStudent(data)
  }
  console.log(student)

  //? []-->componentDidMount()-->It runs only once
  //? useEffect is the best place to fetch the data
  useEffect(()=>{
    try{
      getapi();
    }
    catch(e){
      console.error(e)
    }
  },[])
  let deleteStudent=(id)=>{
    console.log(id);
    axios.delete("http://localhost:5000/student/"+id)
    window.location.assign("/view");
  }
  return (
    <>
    <NavBar/>
    <h1 className='viewHeading'>All Student's Information</h1>
    <table className='tableContainer'>
      <thead>
        <tr>
        <th>S No.</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>PHONE NUMBER</th>
        <th>GENDER</th>
        <th>ADDRESS</th>
        <th>COURSE</th>
        <th colSpan={3}>OPTIONS</th>
        </tr>
      </thead>
      <tbody>
        {student.map((x)=>{
          return(
            <tr key={x.id}>
            <td>{x.id}</td> 
            <td>{x.sname}</td>
            <td>{x.semail}</td>
            <td>{x.mobile}</td>
            <td>{x.gender}</td>
            <td>{x.address}</td> 
            <td>{x.course}</td> 
            <td>
              <NavLink to={`/edit/${x.id}`}>
                <button className='btnupdate'>
                  <span>UPDATE</span>
                  <span><GrUpdate /></span>
                  </button>
              </NavLink>
            </td>
            <td>
              <button className='btndelete' onClick={()=>deleteStudent(x.id)}>
                <span>DELETE</span>
                <span><RiDeleteBack2Fill /></span>
                </button>
              </td>
              <td>
              <NavLink to={`/singlestu/${x.id}`}>
                <button className="btnview">
                  <span>VIEW-MORE</span>
                  <span><MdOutlineGridView /></span>
                  </button>
              </NavLink>
              </td>
            </tr>
            );
        })}
      </tbody>
    </table>
    </>
  )
}

export default ViewAll