import React, { useEffect, useState } from 'react'
import './css/index.css'
import Sidebar from './Sidebar';
import Main from './Main';
import axios from 'axios';

function Index(){

    const [questions, setQuestions] = useState([])

    useEffect (() => {
        async function getQuestion(){
            await axios.get('https://stack-hubbackend.vercel.app/api/question').then((res) => {
                console.log(res.data)
                setQuestions(res.data.reverse())
               }).catch((err) => {
                console.log(err)
               })
        }
        getQuestion()
      
    }, [])
    return(
        <div className='stack-index'>
            <div className='stack-index-content'>
                <Sidebar />
                <Main questions={questions}/>
               
                

            </div>

        </div>

    );
}

export default Index;
