import React from "react";

import './Card.css';


function Cards(){
    const tags=[
      {  
         title:"HTML & CSS",
        desc:"HTML is the meaning and structure of web content.HTML provides web page structure, whereas CSS is mainly used to control web page styling",
        id:"1"
    },
    {  
    title:"Javascript",
       desc:"Javascript is a scripting and programming language that allows you to implement complex features on web page,display static information for you to look at displaying timely content updates ",
       id:"2"
       
    },
    
    {  
    title:"Java",
    desc:"Java is object oriented programming language and software platform that runs on multiple devices,java's oop concepts include encapsulation,inheritance and polymorphism.",
    id:"3"
    },

    {  
    title:"PYTHON",
    desc:"Python is dynamically typed and garbage collected.It supports multiple programming paradigms,Python used for task automation, data analysis.",
    id:"4"
    },

    {  
    title:"REACT JS",
    desc:"React is a javascript based UI development library.Although React is a library rather that a language, it is widely used in web development.",
    id:"5"
    },
    
    {  
            title:"BLOCKCHAIN",
    desc:"Blockchain technology is an advanced database mechanism that allows transparant information sharing within a business network.",
    id:"6"
    }, 
     
    {  
    title:"ANDROID",
    desc:"Android OS is a linux based mobile operating system rund on smartphones and tablets,Android platform includes an operating system based upon the Linux kernel,a GUI a web browser.",
    id:"7"
    },
    
    {  
    title:"ANGULAR JS",
    desc:"Angular JS is a structural framework for dynamic web application.It lets you use HTML as your template language and extend HTML's syntax to express your application components",
    id:"8"
    },
    {
        title:"Jquery",
        desc:"jQuery is a JavaScript library. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling and more....",
        id:"9"
    }, {  
        title:"ASP.Net",
        desc:"ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-enabled, Internet-connected apps.",
        id:"10"
        },
        
        {  
        title:"Linux",
        desc:" Server OS for web servers, database servers, file servers, email servers and any other type of shared server.",
        id:"11"
        },
        {
            title:"MySql",
            desc:"MySQL is a relational database management system based on SQL – Structured Query Language. The application is used for a wide range of purposes, including data warehousing, e-commerce",
            id:"12"
        }
    ];

    return(
        <div className="tag">
            <div className="title1">
                <h1><span>Tags</span></h1>
                <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
                
                
            </div>
            <div className="container1">
                {tags.map((ele,ind)=>{
                    return(
                        <div style={{
                            boxShadow:"3px 5px grey"
                        }}className="card1" key={ind}>
                            <div className="title2">{
                                
                               

                                <h4>{ele.title}</h4>
                            }
                            </div>
                            <p>{ele.desc}</p>
                            
                        </div>
                    );
                })}
            </div>
        </div>
            );
         

        
    

}

export default Cards;