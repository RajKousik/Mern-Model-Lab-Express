const employeeModel = require('../models/employeeModel')

const getAllEmployeeDetails = async(req, res) =>
{
    try{   
        const employees = await employeeModel.find();
        res.status(200).json(employees);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message : err.message});
    }
}

const createEmployee = async (req, res)=>{
    
    const newEmployee = new employeeModel({
        name : req.body.name,
        email : req.body.email, 
        profession : req.body.profession,
        age : req.body.age, 

    })


    try{
        const employee = await newEmployee.save();
        res.status(201).json(employee);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: err.message});
    }

}

const getEmployeeDetail = (req, res)=>{
    
    try{   
        res.status(200).json(res.employee);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message : err.message});
    }

}

const updateEmployee = async (req, res) => {
    if(req.body.name != null)
    {
        res.employee.name = req.body.name
    }
    if(req.body.age != null)
    {
        res.employee.age = req.body.age
    }
    if(req.body.email != null)
    {
        res.employee.email = req.body.email
    }
    if(req.body.profession != null)
    {
        res.employee.profession = req.body.profession
    }

    try{
        const updatedEmployee = await res.employee.save()
        res.status(200).json(updatedEmployee)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}

const deleteEmployee = async(req, res) => {
    try{
        await res.employee.deleteOne()
        res.status(200).json({message: `Deleted User : ${res.employee.name}`})
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}


async function getEmployee(req, res, next) {
    let employee;
    try
    {
        employee = await employeeModel.findById(req.params.id);
        if(employee == null)
        {
            return res.status(404).json({Message : `User Not Found with id ${req.params.id}`})
        }
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({message : err.message});
    }
    res.employee = employee;
    next();
} 

module.exports = {getAllEmployeeDetails, createEmployee, getEmployee, getEmployeeDetail, updateEmployee, deleteEmployee};