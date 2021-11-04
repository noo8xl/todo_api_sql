const { Router } = require('express')
const router = Router()
const todoController = require('../controller/todo_controller')

router.post('/create', todoController.CreateTask)
router.patch('/edit', todoController.EditTask)
router.delete('/delete', todoController.DeleteTask)
router.get('/get_all', todoController.GetAll)



module.exports = router