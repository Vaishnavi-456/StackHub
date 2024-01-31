//import { Card } from "@mui/material";
import React from "react";
import "./About.css"


function Task(){
        const data = [
          {
            img:"https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=740",
            Name: "RUTUJA PEKHALE",
             description:
             " BackEnd Developer  ",
             id:"rutujapekhale611@gmail.com"
          },
          { img:"https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg?w=740",
            Name: "VARSHA KOLHE",
             description:
              "Designer,FrontEnd Developer.",
           id:"kolhevarsha65@gmail.com"
          },
          { img:"https://img.freepik.com/premium-vector/people-profile-icon_24877-40756.jpg?w=740",
            Name: "VAISHNAVI TILE",
             description:
              "Designer,FrontEnd Developer.",
           id:"vaishnavitile2210@gmail.com"
          },
          { img:"https://img.freepik.com/premium-vector/human-resources-concept_24911-17949.jpg?w=740",
            Name: "PAYAL BORSE",
            description:
             "Document Designer",
          id:"payalborse5@gmail.com"
          },
          { img:"https://img.freepik.com/premium-vector/people-profile-icon_24877-40756.jpg?w=740",
            Name: "SNEHAL VYAVHARE",
            description:
             "Document Designer",
          id:"snehalvyavahare12@gmail.com"
          },
        ];

        const openGoogleForm = () => {
          const formURL = 'https://forms.gle/JJ1Jb29PGGmvMxdeA';
          window.open(formURL, '_blank');
        };
      
        return (
          <div className="page">
          <div className="page-title">
            <h1>ABOUT US!</h1>
       
            <p>There’s no use talking about the problem unless you talk about the solution </p>
           <p>Our products and tools enable people to ask, share and learn at work or at home.</p> 
            <hr/>
          </div>
          <div>
           <h1>OUR TEAM</h1> 
          <div className="container">
            {data.map((elem, ind) => {
              return (

                <div style={{
                  boxShadow:"2px 5px grey"
                }}className="card" key={ind}>
                  <div>
                    {/* <h2>{elem.Name}</h2> */}
                    <img
                className="card-img"
                src={elem.img}
                width="100%"
                alt={elem.title}
              />
              <h2>{elem.Name}</h2>
                  </div>
                  <p>{elem.description}</p>
                  <a href="">{elem.id}</a>
                  
            <button onClick={openGoogleForm} className="card-BTN">Contact {elem.price}</button>
                </div>
              );
            })}
          </div>
         </div>
         </div>
        );
      }
       export default Task;