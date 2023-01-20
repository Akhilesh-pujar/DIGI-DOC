const mongoose = require("mongoose");

const attendSchema = new mongoose.Schema({
    degree: {
        type: String,
        required:true,
    },
    branch: {
        type: String,
        required:true,
    },
    mis: {
        type: Number,
        required: true
    },
    timeIn: {
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Attendance", attendSchema);