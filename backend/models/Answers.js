const mongoose = require('mongoose')
const Schema = mongoose.Schema //Define Schema

const answerSchema = new Schema({  //Constructor
    question_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Questions",
    },

    answer:String,
    created_at:{
        type:Date,
        default:Date.now()
    },
    user:Object,
    Comment_id :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments" ,
    }
})

module.exports = mongoose.model("Answers" , answerSchema)