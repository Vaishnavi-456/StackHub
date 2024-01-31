import React from 'react'
import {Public} from '@mui/icons-material'
import {Stars} from '@mui/icons-material'
import {Work} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups';
import './css/Sidebar.css'


function Sidebar(){
    return(
          <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-options'>
                    <div className='sidebar-option'>
                        <Link to ="/">Home</Link>
                        </div>
                        <div className='sidebar-option'>
                            <Link>PUBLIC</Link>
                            <div className='link'>
                                <div className='link-tag'>
                                  <Public />
                                  <Link>Question</Link>
                                  </div>
                                  <div className='tags'>
                                    <Link to='/cards'><p>Tags</p></Link>
                                    <p>Users</p>
                                </div>

                            </div>

                        </div>
                        <div className='sidebar-option'>
                            <p>COLLECTIVES</p>
                            <div className='link'>
                                <div className='link-tag'>
                                  <Stars />
                                  <Link>Explore Collection</Link>
                                  </div>

                            </div>

                        </div>
                        <div className='sidebar-option'>
                            <p>FIND A JOB</p>
                            <div className='link'>
                                <div className='link-tag'>
                                  <Link>Jobs</Link>
                                  <Link>Companies</Link>
                                 
                                </div>

                            </div>

                        </div>

                        <div className='sidebar-option'>
                            <p>TEAMS</p>
                            <div className='link'>
                                <div className='link-tag'>
                                  <Work />
                                  <Link>Companies</Link>
                                   
                                  
                                  </div>
                                  <div className='link-tag'>
                                    <GroupsIcon />
                                    <Link to='/about'>About Us</Link>

                                  </div>

                            </div>

                        </div>

                    </div>
                  

                </div>

         </div>

       

    );
}

export default Sidebar;