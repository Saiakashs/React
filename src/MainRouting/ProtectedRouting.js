import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRouting = (props) => {

    const nav=useNavigate();

    const {Component} = props;

    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
            nav(`/`)
        }
    },[])

    return (
        <div>
            <Component/>
        </div>
    )
}

export default ProtectedRouting
