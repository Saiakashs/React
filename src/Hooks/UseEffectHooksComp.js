import React, { useEffect, useState } from "react";

const UseEffectHooksComp=(props)=>{

    const[age,setAge]=useState(18);
    const[sal,setSal]=useState(300000);

    //case1:no dependencies value is passed

    // useEffect(()=>{
    //     setAge(age+1)
    // })

    //case2: when we pass dependencies value as blank array

    // useEffect(()=>{
    //     setAge(age+1)
    // },[])

    //case3: when we have to execute useEffect hook as we want

    useEffect(()=>{
        setAge(age+1);
    },[sal])
        
    return (
        <div>
            <h2>This is Use Effect Hooks Function Component</h2>
            <p>Age is: {age}</p>
            <p>Salary is:{sal}</p>
            <button type="button" className="btn btn-primary" onClick={()=>setSal(sal+50000)}>Increment Salary</button>
        </div>
    )
};

export default UseEffectHooksComp;


