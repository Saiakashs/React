import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteData, fetchData} from './api/apiSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link, Outlet } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';

const DataListComp = () => {
   

    const dispatch=useDispatch();
    const data=useSelector((state)=>state.api.data);
    const status=useSelector((state)=>state.api.status);
    const error=useSelector((state)=>state.api.error);

    useEffect(()=>{
        dispatch(fetchData());
    },[])

    const deleteFun = (id) =>{
        //window.alert(`Delete button clicked ${id}`)
        dispatch(deleteData(id));
    }

    let content;

    if(status==="loading"){
        content=<div><span className='spinner-border'></span></div>
    }

    else if(status==="success"){
        
        content=<table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.length > 0 && 
                                data.map((val,index)=>{
                                    return (

                                        <tr key={val.id}>
                                            <td>{index+1}</td>
                                            <td>{val.pname}</td>
                                            <td>{val.pprice}</td>
                                            <td>{val.pcompany}</td>
                                            <td>{val.pquantity}</td>
                                            <td>
                                                <button type='button' onClick={() => { deleteFun(val.id) }} className='btn btn-outline-danger'>
                                                    <DeleteIcon></DeleteIcon>
                                                </button>
                                            </td>
                                        </tr>

                                    )
                                       
                                })
                    }
                   
                </tbody>
            </table>
        
    }

    else if(status==="failed"){
        content="Something went wrong....";
    }

    return (
        <div>
            <h2>This is Data List Component</h2>
            {content}
        </div>
    )

    
}

export default DataListComp
