const { model } = require("mongoose");
const models = require("../model/student");

const addStudent = async (req, res) => {
  try {
    const existingStudent = await models.StudentModel.findOne(req.body);
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    } else {
      await models.StudentModel.create(req.body);
      res.status(200).json({ message: "Successfully added student details" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const studentList = async (req, res) => {
  try {
    const list = await models.StudentModel.find();
    res.status(200).json({ studentList: list });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    await models.StudentModel.deleteOne({ _id: id });
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const newData = req.body;
    await models.StudentModel.updateOne({ _id: id }, { $set: { ...newData } });
    res.status(200).json({ message: "Successfully updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getStudentDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await models.StudentModel.findOne({ _id: id });
    res.status(200).json({ response });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  addStudent,
  studentList,
  deleteStudent,
  updateStudent,
  getStudentDetails,
};
