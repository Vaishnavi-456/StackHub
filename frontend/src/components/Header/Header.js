
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import HelpIcon from "@mui/icons-material/Help"
// import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import {auth} from '../../firebase'
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';

function Header(){
  const user = useSelector(selectUser);
  const history = useNavigate()

  // const questionList = () => {
  //   const[questions, setQuestions] = useState([]) 
  //   const[searchTerm, setSearchTerm] = useState('')
  // }

  //  useEffect(() => {

  //   const fetchQuestions = async() => {
  //     try{
  //       const response = await axios.get('/api/question')
  //       setQuestions(response.data);
  //     }catch(error) {
  //       console.error("error in fetching questions", error);
  //     }
  //   } 

  //   fetchQuestions();

  // }, []);

  // const handleSearch = (e) => {
  //   setSearchTerm = (e.target.value)
  // }

  
 

  
    return (
    <header>
      <div className="header-container">
      <div className="header-left"> 
        <Link to="/">
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png" alt="logo"/>

        </Link>
                <h3>Products</h3>
                <Link to="./contact"><h4 style={{
                  fontWeight:"normal",
                  color: "ActiveBorder"
                }}>Contact</h4></Link>

      </div>

      <div className="header-middle"> 
        <div className="header-search-container">
          <SearchIcon />
         
          <input type="text"  placeholder="Search.. "/>

        </div>

      </div>

      <div className="header-right"> 
           <div className="header-right-container"> 
           <span
           onClick={() => {
              auth.signOut();
              history("/auth")
           }}>
           <Avatar src={user?.photo}/>
           </span>
          
             <InboxIcon />
             <HelpIcon />

             <svg
              aria-hidden="true"
              className="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
           {/* <img
              src="https://symbols-electrical.getvecta.com/stencil_96/73_stack-exchange-icon.bbd1a14a04.svg"
              alt="stack-exchange"
            /> */}

           </div>

      </div>
      

    </div>
        
    </header>
    );
}

export default Header;