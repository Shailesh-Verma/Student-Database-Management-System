const express = require('express');
const router = express.Router();
const Controller = require('../controller/index');

router.post('/add_student', Controller.addStudent);
router.get('/student_list', Controller.studentList);
router.delete('/delete_student/:id',Controller.deleteStudent);
router.get('/get_student/:id',Controller.getStudentDetails)
router.put('/update_student/:id',Controller.updateStudent);



module.exports  = router;