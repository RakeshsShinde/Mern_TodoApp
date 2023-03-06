const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
    ,
    password: {
        type: String,
        required: true,
    },

    profilepic: {
        type: String,
        default: 'https://storage.live.com/users/0x9857b66aa9637203/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=27B60076FA006FFE159112BAFBA86E65&fofoff=1'
    }


}, { timestamps: true })


module.exports = mongoose.model("User", userSchema);