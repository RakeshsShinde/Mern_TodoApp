const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        enums: ['default', 'shopping', 'whishlist', 'work', 'personal'],
        default: 'defult',
    },

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