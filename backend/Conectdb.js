const mongoose = require('mongoose');

const connection = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('connected !');
    } catch (error) {
        console.error('failed to connect !')
    }
}

module.exports = { connection }

