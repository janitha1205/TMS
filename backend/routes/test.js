const express= require('express')
const {CreateNewTask,GetATask,GetAllTasks,DeleteATask,UpdateAtask} = require('../controllers/taskcontroller')

const router=express.Router()



router.get('/',GetAllTasks)


router.get('/:id',GetATask)

router.post('/',CreateNewTask)


router.delete('/:id',DeleteATask)

router.patch('/:id',UpdateAtask)


module.exports=router