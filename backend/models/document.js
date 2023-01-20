const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String        
    }
  
});

module.exports = mongoose.model("Document", docSchema);