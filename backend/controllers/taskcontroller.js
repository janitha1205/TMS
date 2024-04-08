const TaskLog= require('../models/Task')
const mongoose= require('mongoose')
// get all Tasks
const GetAllTasks = async (req,res) => {
    const AllTasks = await TaskLog.find({}).sort({createdAt: -1})

    res.status(200).json(AllTasks)


}

//get a single Task 
const GetATask = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such Task saved"})

    }



    const ATask = await TaskLog.findById(id)

    if(!ATask){
        return res.status(404).json({error: "No such Task has been included"})
    }else{
    
        res.status(200).json(ATask)
    }


}
//create new Task
const CreateNewTask= async (req,res) => {



    const {title,members,progress}=req.body



    //add doc to db
    try{

        const newTask =await TaskLog.create({title,members,progress})
        res.status(200).json(newTask)

    }catch(error){


        res.status(400).json({error: error.message})
    }

}
//delete a guest

const DeleteATask = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such task saved"})

    }else {
        const task= await TaskLog.findOneAndDelete({_id: id})
        if (!task){
            return res.status(400).json({error:"no such task available"})

        }else{
            res.status(200).json(task)
        }




    }
}
//update a guest
const UpdateAtask = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such task saved"})

    }else {

        const {title,members,progress}=req.body



        //add doc to db



        try{



            const task= await TaskLog.findOneAndUpdate({_id: id},{title,members,progress})
            if (!task){
                return res.status(400).json({error:"no such task available"})
    
            }else{
                res.status(200).json(task)
            }

        }catch(error){

            res.status(400).json({error: error.message})


        }





    }
}


module.exports = {CreateNewTask,
    GetATask,
    GetAllTasks,
    DeleteATask,
    UpdateAtask}
