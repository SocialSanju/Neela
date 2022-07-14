import React from "react";

export default function Product(props) {
    const { product } = props
    return (
        <div key={product._id}>
      
                <h1>{product.Title}</h1>
                            
        </div>
        
    )
}