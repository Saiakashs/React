import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, Outlet } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';



const ProductDashComp = () => {
    const [product,setProduct]=useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (val) => {
        setShow(true);
        setShow(val);
    }
   

    useEffect(()=>{
       fetchData();
    },[])

    const fetchData = () =>{
        axios.get("http://localhost:8888/products").then((response)=>{
            console.log(response.data);
            setProduct(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const deleteProduct = (id) =>{
        console.log(id);
        if(window.confirm(`Are you sure to delete product with id:${id}`)==true){
            axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
                window.alert("Product Updated Successfully")
                fetchData();
            }).catch()

        }

    }
    return (
        <div>
             <h2>This is Product Dash Function Component</h2>

             <Link to="/mainDashboard/productadd" className="btn btn-outline-primary btn-sm mb-2">Add</Link>
             <table className="table table-bordered table-hover table-striped text-center">

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
                    product.length > 0 &&  product.map((val,index)=>{

                        return <tr key={val.id}>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.pprice}</td>
                            <td>{val.pcompany}</td>
                            <td>{val.pquantity}</td>
                            <td>

                                    <button type='button' onClick={()=>handleShow(val)}  className="btn btn-outline-primary btn-sm me-2">
                                        <RemoveRedEyeIcon />
                                    </button>
                                
                                    <Link to={`/maindashboard/productedit/${val.id}`} className="btn btn-outline-primary btn-sm me-2">
                                        <EditIcon />
                                    </Link>
                                    
                                <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>deleteProduct(val.id)}>
                                    <DeleteIcon />
                                </button>
                            </td>
                        </tr>

                    })
                }
                </tbody>
             </table>

            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{show.pname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Name : </span><strong>{show.pname}</strong>   <br></br>
                    <span>Price : </span><strong>{show.pprice}</strong>   <br></br>
                    <span>Company : </span><strong>{show.pcompany}</strong>   <br></br>
                    <span>Quantity : </span><strong>{show.pquantity}</strong>   <br></br>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductDashComp;
