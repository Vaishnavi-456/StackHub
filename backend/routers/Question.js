const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const QuestionDB = require('../models/Questions')


router.post('/' , async(req,res) =>{
    const questionData = new QuestionDB({
        title:req.body.title,
        body:req.body.body,
        tags:req.body.tags,
        user:req.body.user

        
    })

// router.get('/api/question', async((req,res) => {
//     try{
//         const question = Questions.find()
//     }catch(error) {
//         res.status(500).json({error:"Internal server error"})
//     }
// }))

    await questionData.save().then((doc) => {
        res.status(201).send({
            status:true,
            data:doc

        } )
    }).catch((err) =>{
        res.status(400).send({
            status:false,
            message:"Error in adding question"
        })
    })

})

router.get('/:id', async(req,res) => {
    try{

    QuestionDB.aggregate([
        {
            $match : {
                _id: new mongoose.Types.ObjectId(req.params.id)},

            },
    

        {
        
        $lookup: {
            from : "answers",
            let: {question_id : "$_id"},

            pipeline: [{
                $match:{
                    $expr : {
                        $eq: ["$question_id" , "$$question_id"]
                    },
                },
            },

            {
                $project: {
                    _id : 1,
                    user:1,
                    answer : 1,
                    created_at : 1,
                    question_id:1

                },


            },
        ],
         
        as : "answerDetails",

        },

    },


    {
        $lookup : {
            from : "comments",
            let : {question_id:"$_id"},

            pipeline :[{
                $match : {
                    $expr : {
                        $eq  : ["$question_id" , "$$question_id"]
                    },
                },
            },

            {
                $project : {
                    _id:1,
                    user:1,
                    comment:1,
                    question_id:1,
                    created_at:1


                },
            },
        
        ],
        as: "comments",
    },
},
{
   $project: {
     __v:0,
   } ,
},
])

 .exec()
 .then((questionDetails) => {
    res.status(200).send(questionDetails);
 })
 .catch((e) => {
    console.log("Error : ", e)
    res.status(400).send(e);
 });

} catch(err) {
    res.status(400).send({
        message:"Question not found"
    })
}



});


router.get('/', async(req,res) => {

    const error = {
        message:"Error in retrieving questions",
        error:"Bad Request"
    }
    QuestionDB.aggregate([
        {
           
        
        $lookup: {
            from : "comments",
            let: {question_id : "$_id"},

            pipeline: [{
                $match:{
                    $expr : {
                        $eq: ["$question_id" , "$$question_id"]
                    },
                },
            },

            {
                $project: {
                    _id : 1,
                    comment : 1,
                    created_at : 1
                   

                },


            },
        ],
         
        as : "comments",

        },

    },


    {
        $lookup : {
            from : "answers",
            let : {question_id:"$_id"},

            pipeline :[{
                $match : {
                    $expr : {
                        $eq  : ["$question_id" , "$$question_id"]
                    },
                },
            },

            {
                $project : {
                    _id:1


                },
            },
        
        ],
        as: "answerDetails",
    },
},
{
   $project: {
     __v:0,
   } ,
},
])

 .exec()
 .then((questionDetails) => {
    res.status(200).send(questionDetails);
 })
 .catch((e) => {
    console.log("Error : ", e)
    res.status(400).send(error);
 });



});









module.exports = router