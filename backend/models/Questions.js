const mongoose = require('mongoose')
const Schema = mongoose.Schema


const questionSchema = new Schema({
    title:String,
    body:String,
    tags:[],

    created_at:{
        type:Date,
        default:Date.now(),

    },

    user:Object,
    comment_id : {
        type:mongoose.Schema.ObjectId,
        ref:"Comments",
    },
})

module.exports = mongoose.model("Questions", questionSchema)