const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        enums: ['travel', 'shopping', 'whishlist', 'work', 'personal'],
        default: 'personal',
    },

    title: {
        type: String,
        required: true,
    }
    ,
    status: {
        type: String,
        enums: ['pending', 'complete'],
        default: 'pending',
    },
    date: {
        type: Date,
        required: true,
    },

    time: {
        type: String,
        required: true,
    }


}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema);