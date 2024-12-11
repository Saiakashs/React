import React,{useState} from "react";

const UseStatehooksComp=(props)=>{

    const [count,setCount]=useState(0);
    const [name,setName]=useState("Sai");

    const incrementCount = () => {
        setCount(count+1);
    }

    return (
        <div>
            <h2>This is Use State Hooks Function Component</h2>
            <p>Counter Value: <strong>{count}</strong></p>

            <button type="button" className="btn btn-primary" onClick={()=>incrementCount()}>Change Count</button>{" "}

            <button type="button" className="btn btn-primary" onClick={()=>setCount(count+2)}>Change Count</button>{" "}

            <p>My name:{name}</p>
            <button type="button" className="btn btn-primary" onClick={()=>setName("Sai kutthalingam S")}>Change Name</button>{" "}
        </div>
    )
};

export default UseStatehooksComp;