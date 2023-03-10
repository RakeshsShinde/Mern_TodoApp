
const Task = require('../models/task')
const createTask = async (req, res, err) => {
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

const getTask = async (req, res, err) => {
    try {

    } catch (error) {
        next(error)
    }
}

const getTasks = async (req, res, err) => {
    try {

    } catch (error) {
        next(error)
    }
}


module.exports = { createTask, updateTask, getTask, getTasks }