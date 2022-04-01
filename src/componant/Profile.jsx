import React from "react"; 
import './Login.css';
// import { getUserByID } from "../UserAPI/UserAPI";
// import { useParams  } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";


export default function Profile(props){
  let {body,title ,email} = props;

  


  return (
  

    <div >

          <counter>
<div className="container mt-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-7">
            <div className="card p-3 py-4">
                <div className="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" alt="img" className="rounded-circle" /> </div>
                <div className="text-center mt-3"> <span className="bg-secondary p-1 px-4 rounded text-white">{title}</span>
                    <h5 className="mt-2 mb-0">{email}</h5> 
                    <h6><span>{body}</span></h6>
                    <div className="px-4 mt-1">
                        <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    
                    <div className="buttons"> <button className="btn btn-outline-primary px-4">Message</button> <button className="btn btn-primary px-4 ms-3">Contact</button> </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </counter> 
   
</div>

  ) }
