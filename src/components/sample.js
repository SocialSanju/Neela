import React from "react";

export default function Sample(props) {
    const { sample } = props
    return (
        <div key={sample._id} className="card">
        
         
                <h2>{sample.Title}</h2>
              
        </div>
       
    )
}