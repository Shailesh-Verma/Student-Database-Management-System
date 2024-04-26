import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [form, setForm] = useState({
    name: " ",
    gender: "",
    dob: " ",
    email: " ",
    phone: " ",
    address: "",
    course: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/add_student",
        form
      );
      alert(response.data.message);
      setForm({
        name: " ",
        gender: "",
        dob: " ",
        email: " ",
        phone: " ",
        address: "",
        course: "",
      });
    } catch (error) {
      console.log(error);
      alert("Data already present!!");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <h1 className="heading">ADDING STUDENT DETAILS</h1>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Name : </label>
            <input
              type="text"
              name="name"
              className="input-field"
              onChange={handleChange}
            />
            <br />
            <br />
          </div>
          <div className="input-container">
            <label>Email : </label>
            <input
              type="email"
              name="email"
              className="input-field"
              onChange={handleChange}
            />
            <br />
            <br />
          </div>
          <div className="input-container">
            <label>Gender : </label>
            <input
              type="text"
              name="gender"
              className="input-field"
              onChange={handleChange}
            />
            <br />
            <br />
          </div>
          <div className="input-container">
            <label>D.O.B : </label>
            <input
              type="date"
              name="dob"
              className="input-field"
              onChange={handleChange}
            />
            <br />
            <br />
          </div>
          <div className="input-container">
            <label>Contact : </label>
            <input
              type="tel"
              name="phone"
              className="input-field"
              onChange={handleChange}
            />
            <br />
            <br />
          </div>
          <div className="input-container">
            <label>Address : </label>
            <input
              type="text"
              name="address"
              className="input-field"
              onChange={handleChange}
            />
            <br />
            <br />
          </div>
          <div className="input-container">
            <label>Course : </label>
            <input
              type="text"
              name="course"
              className="input-field"
              onChange={handleChange}
            />
            <br />
            <br />
          </div>
          <button className="btn-addstudent" type="submit">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};
export default Home;
