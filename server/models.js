const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

        

    },
    checked:{
        type:Boolean,
        default:false,
        
    },
    assignTo:{
        type:String,
        default:null,
        required: true,
    },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
