import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewAll from "./ViewAll";
import back from './Assets/back.png';

const Edit = ({ studentId, onClose, fetchData }) => {
  const [data, setData] = useState({});
  const [openEdit, setOpenEdit] = useState(true);
  const navigate = useNavigate();

  const getStudent = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/get_student/${studentId}`
      );
      setData(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(
        `http://localhost:4000/api/update_student/${studentId}`,
        data
      );
      alert(response.data.message);
      onClose();
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const goBack = () => {
    navigate("/viewall");
    setOpenEdit(false);
  };
  return (
    <div>
      {openEdit ? (
        <div>
          <button className="btn-back" onClick={goBack}>
            <span className="img-container-edit">
          <img src={back} alt="Back Icon" height="15px" width="18px"></img>
           </span>
          Back
          </button>
          <h1 className="heading">UPDATE PORTAL</h1>
          <div className="contact-form">
            <form method="post" onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Name : </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
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
                  value={data.email}
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
                  value={data.gender}
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
                  value={data.dob}
                  className="input-field"
                  onChange={handleChange}
                />
                <br />
                <br />
              </div>
              <div className="input-container">
                <label>Contact no : </label>
                <input
                  type="tel"
                  name="phone"
                  value={data.phone}
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
                  value={data.address}
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
                  value={data.course}
                  className="input-field"
                  onChange={handleChange}
                />
                <br />
                <br />
              </div>
              <button className="btn-update" type="submit">Update Student</button>
            </form>
          </div>
        </div>
      ) : (
        <ViewAll />
      )}
    </div>
  );
};
export default Edit;
