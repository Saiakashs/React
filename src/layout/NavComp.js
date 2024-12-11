import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const NavComp=(props)=>{

    
    let nav=useNavigate();

    const logUser = () =>{

        if(window.confirm("Are you sure to Logout")==true){
            window.alert("Logout Successfully")
            sessionStorage.clear();
            nav("/");
        }
        
       
    }

    return (
        <div>
            {/* <h2>This is Nav Function Component</h2> */}
            <Link to="state" className="btn btn-outline-primary btn-sm me-2">MyStateComp</Link>
            <Link to="virtualdom" className="btn btn-outline-primary btn-sm me-2">VirtualDOMComp</Link>       
            <Link to="images/id" className="btn btn-outline-primary btn-sm me-2">MyImagesComp</Link>       
            <Link to="hooks" className="btn btn-outline-primary btn-sm me-2">HooksStateComp</Link>
            <Link to="myfavcolor" className="btn btn-outline-primary btn-sm me-2">MyFavColorComp</Link>
            <Link to="productdash" className="btn btn-outline-primary btn-sm me-2">ProductDashComp</Link>
            {/* <Link to="productadd" className="btn btn-outline-primary btn-sm me-2">ProductAddComp</Link>
            <Link to="productedit" className="btn btn-outline-primary btn-sm me-2">ProductEditComp</Link> */}
            <Link to="mycarouselcomp" className="btn btn-outline-primary btn-sm me-2">MyCarouselComp</Link>
            <Link to="datalist" className="btn btn-outline-primary btn-sm me-2">DataListComp</Link>
            
            <button type='button' onClick={logUser} className='btn btn-danger mt-3 ms-3' style={{float:"right"}}>
                <LogoutIcon></LogoutIcon>
            </button>
        </div>
    )
};

export default NavComp;