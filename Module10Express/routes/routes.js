import express from 'express'
import {getAllEmployees,getEmployee,createEmployee,updateEmployee,deleteEmployee} from '../controllers/employees.js'
const router = express.Router()

router.route('/')
    .get(getAllEmployees)
    .post(createEmployee)
router.route('/')
    .get(getEmployee)
    .patch(updateEmployee)
    .delete(deleteEmployee)

export default router

