import React from "react";
import './external.css'
import myModule from './mycss.module.css'
const CssComp=()=>{

    let circle={
        width:true?"100px":"200px",
        height:true?"100px":"200px",
        borderRadius:"50%",
        border:false?"2px solid black":"2px solid red",
        margin:"auto"
    }
    return (
        <div>
            {/* use of internal css */}

            <h2 style={{color:'blue',backgroundColor:"aqua"}}>This is CSS Component</h2>
            <p style={circle}>Hi</p>

            {/* use of external css */}

            <div className="txtprimary">Hello Sai</div>
            <div className="txtsecondary">Hello Arun</div>

             {/* use of module css */}
             <div className={myModule.special}>Hello Sai</div>
        </div>
    )
};

export default CssComp;