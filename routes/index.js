const express = require('express');
const router = express.Router();
const { Employee } = require('../models/employee');


// Get All Employees
router.get('/api/employees', (req, res) => {
    Employee.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Get Single Employee (First Way)

router.get('/api/employee/:id', (req, res) => {
    Employee.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});


router.post('/api/employee/add', (req, res) => {
    const emp = new Employee({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Tell: req.body.Tell,
        Email:req.body.Email,
        Job:req.body.Job
    });
    emp.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: `คุณ ${data.Firstname} นามสกุล ${data.Lastname} ได้ถูกเพิ่มเรียบร้อยเเล้ว`, addEmployee: data})
        } else {
           console.log(err);
        }
    });
});



// Update Employee

router.put('/api/employee/update/:id', (req, res) => {
    const emp = {
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Tell: req.body.Tell,
        Email:req.body.Email,
        Job:req.body.Job
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: `ID ${data.id} บันทึกข้อมูลเรียบร้อยเเล้ว!`, updateEmployee: data})
        } else {
            console.log(err);
        }
    });
});





// Delete Employee
router.delete('/api/employee/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: `ลบ id ${data.id} เรีบยร้อยเเล้ว!`, deleteEmployee: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;