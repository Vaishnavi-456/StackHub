import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import StackOverflow from './components/StackOverflow';
import Auth from "./components/Auth/Auth";
import{
  BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import {auth} from './firebase'
// import AddQuestion from './components/AddQuestion/Question';
import AddQuestion from './components/AddQuestion/Question'
import Contact from './components/Contact';
import About from './components/About'

import ViewQuestion from './components/ViewQuestion';
import Cards from './components/Cards'
// import '../node_modules/bootstrap/dist/css/bootstrap.css';




function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }))
      } else {
        dispatch(logout())
      }
    })
  },[dispatch])

  // const PrivateRoute = ({component: Component, ...rest}) => (
  //   <Route {...rest} render={(props) =>  user ? (<Component {...props}/>) : (<Navigate to={{pathName: "auth", state: {
  //     from: props.location,
  //   },
  // }}/>)} />
  // )

  return (
    <div className="App">
      
   
    <BrowserRouter>
      <Header /> 
     
        <Routes>
        <Route  path = {user ? "/" : "auth"} element={user ? <StackOverflow /> : <Auth />}/>
        <Route  path="/addquestion" element={<AddQuestion />} />
        <Route  path="/question" element={<ViewQuestion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path = "/about" element={<About/>}/>
        <Route path = "/cards" element={<Cards/>}/>
        
      

       
       </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;


