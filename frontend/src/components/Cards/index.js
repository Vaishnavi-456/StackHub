import React from 'react'
import '../StackOverflow/css/index.css'
import Sidebar from '../StackOverflow/Sidebar';
import Cards from './Cards';

function index(){
    return(
        <div className='stack-index'>
            <div className='stack-index-content'>
                <Sidebar />
                <Cards />
               
                

            </div>

        </div>

    );
}

export default index;