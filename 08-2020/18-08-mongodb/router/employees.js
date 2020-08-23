const express = require("express");
const router = express.Router();
const EmployeesData = require("../model/employeesModel");
const {
  getEmployee,
  getAllEmployee,
  addNewEmployee,
  getOneEmployee,
  updateOneEmployee,
  deleteOneEmployee,
  getAdd,
} = require("../controllers/employeeController");

router.route("/").get(getAllEmployee).post(addNewEmployee);
router
  .route("/:name")
  .get(getEmployee, getOneEmployee)
  .patch(getEmployee, updateOneEmployee)
  .delete(getEmployee, deleteOneEmployee);

router.get("/search/:add", getAdd, (req, res) => {
  res.status(200).json(res.employee);
});

module.exports = router;

//________________________________________________________________________________

// GET  http://localhost:3000/employees/ -->  get all employees
// POST http://localhost:3000/employees/ -->  add employee
// GET http://localhost:3000/employees/:name -->  get employee by name
// PATCH http://localhost:3000/employees/:name -->  update employee by name
// UPDATE aka PUT http://localhost:3000/employees/:name -->  update employee by name
// DELETE http://localhost:3000/employees/:name -->  delete employee by name
