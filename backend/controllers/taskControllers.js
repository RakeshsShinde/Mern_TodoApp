
const Task = require('../models/task')
const createTask = async (req, res, next) => {
    try {
        const { id } = req.user;
        const date = new Date(req.body.date);
        console.log(req.body);
        const { title, description, status, time, type } = req.body;
        const task = await new Task({
            type: type,
            userId: id,
            date: date,
            title: title,
            description: description,
            status: status,
            time: time
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
        const { title, decscription, type, status } = req.body;
        const task = await Task.findByIdAndUpdate(id, {
            title: title,
            description: decscription,
            type: type,
            status: status,
        }, { new: true });

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
        const { day, type } = req.query;
        var tasks;
        if (type) {
            var tasks = await Task.find({ userId: id, type: type })
        } else {
            var tasks = await Task.find({ userId: id })
        }
        res.status(201).json({ tasks })
    } catch (error) {
        next(error)
    }
}


const deleteTask = async (req, res, next) => {

    try {
        const { id } = req.params;
        var todo = await Task.findById(id);
        const { _id } = todo;
        if (!todo) {
            res.status(404).send('todo not found !')
        }
        else if (_id == id) {
            await Task.findByIdAndDelete(id);
            res.status(200).send(`todo with id ${id} deleted successfully `);
        }

    } catch (err) {
        next(err);
    }
}


module.exports = { createTask, updateTask, getTask, getTasks, deleteTask }