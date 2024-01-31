import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import img from '../../src/images/contact-us1.png'
import { useForm, ValidationError } from "@formspree/react";









const Contact=()=>{

    let history = useNavigate();
    const [state, handleSubmit] = useForm("mleqeqgv");
    if(state.succeeded){
       alert("Thanks For Connecting!!")
       history("/")
        
        
    } 
    
    
    return(
    <div>
           <form action="https://formspree.io/f/mleqeqgv" onSubmit={handleSubmit}>
              <h1>Contact Here</h1>
              <input type="text" name="name" id=""  placeholder="Enter the name"/>
              <input type="email" name="email" id="" placeholder="example@gmail.com"/>
              <ValidationError 
              prefix="Email"
              field="email"
              errors={state.errors}



            />
              
              

              <input type="Phone" name="phone" id="" placeholder="+91"/>
              <ValidationError 
              prefix="phone"
              field="phone"
              errors={state.errors}



            />
              <textarea name="message" id="" cols={30} rows={10}  placeholder="Type here your query.."/>
              <ValidationError 
              prefix="message"
              field="message"
              errors={state.errors}



            />
              <button type="submit" disabled={state.submitting}>Send</button>
             
           </form>
           <img className="img" src={img}/>
    </div>         

    ) 
}
export default Contact;