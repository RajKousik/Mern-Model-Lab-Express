const express = require("express");
const router = express.Router();


const {getAllEmployeeDetails, createEmployee, getEmployee, getEmployeeDetail, updateEmployee, deleteEmployee} = require('../controllers/employeeController')



router.route('/').get(getAllEmployeeDetails);
router.route('/').post(createEmployee);

router.route('/:id').get(getEmployee, getEmployeeDetail);
router.route('/:id').patch(getEmployee, updateEmployee);
router.route('/:id').delete(getEmployee, deleteEmployee);

module.exports = router;