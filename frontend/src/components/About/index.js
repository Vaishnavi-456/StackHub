import React from 'react'
import '../StackOverflow/css/index.css'
import Sidebar from '../StackOverflow/Sidebar';
import About from './About';

function index(){
    return(
        <div className='stack-index'>
            <div className='stack-index-content'>
                <Sidebar />
                <About />
               
                

            </div>

        </div>

    );
}

export default index;