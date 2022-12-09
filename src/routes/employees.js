import {Router} from 'express'
import {getEmployes, newEmployee, updateEmployee, deleteEmployee,getEmployee } from '../controllers/employees.js'
const router = Router()

router.get('/employees', getEmployes)
router.get('/employees/:id', getEmployee)
router.post('/employees', newEmployee)
router.patch('/employees/:id', updateEmployee)
// router.put('/employees/:id', updateEmployee)
router.delete('/employees/:id' , deleteEmployee)



export default router
