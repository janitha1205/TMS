const mongoose=require('mongoose')

const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title:{owner:{ type: String, required:true},type_of: { type: String, required:true}},
    members:{name:{ type: String, required:true},time_in:  { type: String, required:true},time_out:{ type: String, required:true},Note: { type: String, required:true}},
    progress:{status : { type: String, required:true},type_of: { type: String, required:true}}},{timestamps: true})
module.exports= mongoose.model('Tasks',TaskSchema)
