
const Task = require('../models/task')
const createTask = async (req, res, next) => {
    try {
        const { id } = req.user;
        const date = new Date(req.body.date);
        const task = await new Task({
            ...req.body,
            userId: id,
            date: date,


        })
        const saveUser = await task.save();
        res.status(201).json(saveUser);
    } catch (error) {
        next(error)
    }
}

const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, { ...req.body }, { new: true });
        res.status(200).json(task);
    } catch (error) {
        next(error)
    }
}

const getTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        res.status(200).json(task);

    } catch (error) {
        next(error)
    }
}

const getTasks = async (req, res, next) => {
    try {
        const { id } = req.user;
        const tasks = await Task.find({ userId: id })
        res.status(201).json({tasks} )
    } catch (error) {
        next(error)
    }
}


module.exports = { createTask, updateTask, getTask, getTasks }