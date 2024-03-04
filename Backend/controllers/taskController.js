const mongoose  = require("mongoose");
const taskModel = require("../models/TaskModel"); //(TaskModule import)

//TO CREATE A TASK IN POST METHOD
const createTask = async (req,res) =>{
    const { title,description } = req.body;

    try{
        const task = await taskModel.create({ title,description });
        res.status(200).json(task);
       
    }catch (e) {
        res.status(400).json({error:e.message})
    }
};

// TO GET ALL TASKS IN GET METHOD

const getTasks = async (req,res) => {

    try{
        const tasks = await taskModel.find({});
        res.status(200).json(tasks);
    } catch (e) {
        res.status(400).json({error:e.message})
    }
}

// TO GET SINGLE TASK IN GET METHOD

const getSingleTask = async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ message:"Task Not Found" });
        
    }
    try{
        const singleTask = await taskModel.findById(id);
        res.status(200).json(singleTask)
    }catch (e) {
        res.status(400).json({error:e.message})
    }
}

// To UPDATED TASK IN UPDATE METHOD

const updatedTask = async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error:"Task Not Found"});
    }
    try{
        const task = await taskModel.findByIdAndUpdate({_id:id,},{...req.body,});
        res.status(200).json(task)
    } catch (e) {
        res.status(400).json({error:e.message})
    }
}

//TO DELETE TASK IN DELETE METHOD

const deleteTask = async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Task Not Found"});
    }
    try{
        const task = await taskModel.findByIdAndDelete(id);
        res.status(200).json(task)
    }catch (e) {
        res.status(400).json({error:e.message})
    }
}




module.exports = { createTask,getTasks,getSingleTask,updatedTask,deleteTask };

