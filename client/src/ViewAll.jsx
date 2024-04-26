import React, { useState, useEffect } from "react";
import axios from "axios";
import Edit from "./Edit";
import clear from "./Assets/delete.png";
import update from './Assets/update.png'

const ViewAll = ({ openEditForm }) => {
  const [students, setStudents] = useState([]);
  const [isEditClicked, setEditClicked] = useState(false);
  const [editStudentId, setEditStudentId] = useState("");
  const [showViewAll, setShowViewAll] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/delete_student/${id}`
      );
      alert(response.data.message);
      await fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (id) => {
    console.log(id);
    setEditClicked(true);
    setEditStudentId(id);
    setShowViewAll(false);
  };

  const handleEditClose = () => {
    setEditClicked(false);
    setShowViewAll(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/student_list"
      );
      setStudents(response.data.studentList);
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <>
      {showViewAll ? (
        <div>
          <h1 className="heading">STUDENT LIST</h1>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>D.O.B</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>ADDRESS</th>
                  <th>COURSE</th>
                  <th colSpan={2}></th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.gender}</td>
                    <td>{student.dob}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.address}</td>
                    <td>{student.course}</td>
                    <td>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(student._id)}
                      >
                        Delete 
                        <span className="img-container">
                        <img src={clear} alt="Clear Icon" height="15px" width="18px"></img>
                        </span>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => handleEdit(student._id)}
                      >
                        Edit 
                        <span className="img-container">
                        <img src={update} alt="update Icon" height="15px" width="18px"></img>
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
      {isEditClicked && (
        <Edit
          studentId={editStudentId}
          onClose={handleEditClose}
          fetchData={fetchData}
        />
      )}
    </>
  );
};
export default ViewAll;
