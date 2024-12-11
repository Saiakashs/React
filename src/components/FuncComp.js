import React from "react";

const FuncComp=(props)=>{
    return (
        <div>
            <h2>This is Function Component</h2>
            <p>Name:{props.name} I am a <strong>{props.post}</strong></p>
        </div>
    )
};

export default FuncComp;