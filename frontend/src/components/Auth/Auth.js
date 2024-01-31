import React, {useState} from 'react';
import './Auth.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {auth, provider} from "../../firebase"
import { useNavigate} from "react-router-dom";





function Auth(){
   
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)
    const[error, setError] = useState("")
    const history = useNavigate();

    <div className='image' >
    </div>

    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider).then((res) => {
            history("/");
            console.log(res)

        })

    }

    const handleRegister = (e) => {
        setError("")
        e.preventDefault()
        setLoading(true)
        if(email === ""  || password === "" || username === ""){
            setError('Required field is missing')
            setLoading(false)
        } else {
            createUserWithEmailAndPassword(auth, email , password).then((res) => {
                setLoading(false) 
                history("/");
                console.log(res)
            }).catch((error) => {
                console.log(error)
                setError(error.message)
                setLoading(false)
            })
        }
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        if(email === "" || password === "" ){
            setError('Required field is missing')
            setLoading(false)
        } else {
            signInWithEmailAndPassword(auth, email, password).then((res) => {
                console.log(res)
                setLoading(false)
                history("/");
            }).catch((error) => {
                console.log(error.code)
                setError(error.message)
                setLoading(false)
            })

        }
    }


    return(
        <div className='auth'>
            <div className='auth-container'>
               {/* <p style={{
                color : "black",
                fontSize : "medium",
                fontWeight: "bold",
                
                border : "2px solid white",
                borderRadius : "2px",
                backgroundColor : "whitesmoke"
               }}>Login using one of the following services</p> */}
               <div className='sign-options'>
                <div onClick = {handleSignInGoogle} className='single-option'>
                    <img id="img"src='https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip' alt='Google'/>
                    <p style={{
                       paddingTop : "8px",
                       paddingLeft : "10px"
                    }}>LogIn with Google</p>

                </div>

               </div>
               <div className='auth-login'>
                <div className='auth-login-container'>
                    {
                        register ? (<>
                        <div className='input-field'>
                            <p>Username</p>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type='text'/>

                        </div>
                        <div className='input-field'>
                            <p>Email</p>
                            <input value={email} onChange={(e) => setEmail(e.target.value)}type='text'/>

                        </div>
                        <div className='input-field'>
                            <p>Password</p>
                            <input value={password} onChange={(e) => setPassword(e.target.value)}type='password'/>

                        </div>
                        <button onClick={handleRegister}
                        disabled = {loading}
                        style={{marginTop: "10px"}}>
                             {loading ? "Registering..." : "Register"}
                        </button>
                        
                        
                        
                        </>) : (<><div className='input-field'>
                            <p>Email</p>
                            <input value={email} onChange={(e) => setEmail(e.target.value)}type='email'/>

                        </div>
                        <div className='input-field'>
                            <p>Password</p>
                            <input value={password} onChange={(e) => setPassword(e.target.value)}type='password'/>

                        </div>
                        <button onClick={handleSignIn}
                        disabled= {loading}
                         style={{marginTop: "10px"}}>
                            {loading ? "Signing In..." : "Login"}
                        </button></>)}

                        
                    <p onClick={() => setRegister(!register)} 
                    style={{marginTop:"10px", textAlign:"center", color:"#0095ff", textDecoration: "underline",cursor:"pointer"}}>{register ? "Login" : "Register"}?</p>

                </div>

                

               </div>
                  {
                    error !== "" && (
                    <p style={{
                        color:"#A52020", 
                        fontSize : "16px"
                        // fontWeight: "bold",
                       
                       
                    }}>
                        {error}
                    </p>)
                  }

            </div>

        </div>


    );
}

export default Auth;