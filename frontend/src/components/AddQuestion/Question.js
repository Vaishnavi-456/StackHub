import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import "./Question.css"
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/userSlice'
import axios from "axios";
import{TagsInput} from 'react-tag-input-component'



function Question() {
    const user = useSelector(selectUser)
    const [loading, setLoading]  = useState(false)
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [tags,setTags] = useState([])

    const history = useNavigate()

    const handleQuill = (value) => {
        setBody(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    

    if(title !== "" && body !== ""){
        setLoading(true)
        const bodyJSON ={
            title:title,
            body:body,
            tags:JSON.stringify(tags),
            user:user



        }

         axios.post('https://stack-hubbackend.vercel.app/api/question', bodyJSON).then((res) => {
            alert("Question added successfully")
            setLoading(false)
            history('/')
        }).catch((err) => {
            console.log(err)

        })

    }

    else if(title == "" || body == ""){
        alert("Required field is missing!!")


    }

    

    }

    return (
        <div className="add-question">
            <div className="add-question-container">
                <div className="head-title">
                    <h1>Ask a public question</h1>
                </div>

                <div className="question-container">
                    <div className="question-options">
                        <div className="question-option">
                            <div className="title">
                                <h3>Title</h3>
                                <small>Be a specific and imagine you're asking a question to another person</small>
                                <input value = {title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Add question title..." />
                            </div>

                        </div>

                        <div className="question-option">
                        <div className="title">
                                <h3>Body</h3>
                                <small>Include all the information someone would need to answer your question</small>
                                <ReactQuill value = {body} onChange={handleQuill} className="react-quill" theme="snow"/>
                            </div>

                        </div>

                        <div className="question-option">
                        <div className="title">
                                <h3>Tags</h3>
                                <small>Add up to 5 tags to describe what your question is about</small>
                                <TagsInput value={tags} onChange={setTags} type="text" placeholder="Press enter to add new tag..." />

                                
                                
                            </div>

                        </div>

                    </div>

                </div>
                <button disabled={loading} type="submit" onClick={handleSubmit} className="button">{
                    // loading ? "Adding your question.." : "Add your question"
           
           
                   }        

                   Add your question</button>

            </div>
            

        </div>

    );
}

export default Question;
