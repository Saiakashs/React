import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteData, fetchData} from './api/apiSlice';
import DeleteIcon from '@mui/icons-material/Delete';

const DataDeleteComp = () => {

    const dispatch=useDispatch();
    const data=useSelector((state)=>state.api.data);
    const status=useSelector((state)=>state.api.status);
    const error=useSelector((state)=>state.api.error);

    useEffect(()=>{
        dispatch(fetchData()); 
    },[])

    const handleDelete = (id) =>{
        const product = data.find((val) => val.id ===id);
        if(window.confirm(`Are you sure to delete product with id:${product.id}`)==true){
                dispatch(deleteData(id))
                window.alert("Product Updated Successfully")
                dispatch(fetchData()); 
        }
    }

   
    let content;

    if(status==="loading"){
        content=<div><span className='spinner-border'></span></div>
    }

    else if(status==="success"){
        
        content=   <table className="table table-bordered table-hover table-striped text-center">

        <thead>

            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Company</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>

        </thead>
        
        <tbody>
        

        {
            data.length > 0 &&  data.map((val,index)=>{

                return <tr key={val.id}>
                    <td>{index+1}</td>
                    <td>{val.pname}</td>
                    <td>{val.pprice}</td>
                    <td>{val.pcompany}</td>
                    <td>{val.pquantity}</td>
                    <td>
                        
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>handleDelete(val.id)}>
                            <DeleteIcon />
                        </button>
                    </td>
                </tr>

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
            <h2>This is Data Delete Component</h2>
            {content}
        </div>
    )
}

export default DataDeleteComp
