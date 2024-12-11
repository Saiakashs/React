import axios from "axios";
import React, { useRef} from "react";
import './LoginComp.css';
import { useNavigate } from "react-router-dom";


const LoginComp=(props)=>{ 

  const nav=useNavigate();
  const uidRef=useRef();
  const upassRef=useRef();



    const checkUser = () =>{

        let uid=uidRef.current.value;
        let upass=upassRef.current.value;

        let empObj={
            userid:uid,
            userpass:upass
        }

        axios.get("http://localhost:8888/users").then((response)=>{
            //console.log(response.data);

            let currentUser=response.data.filter((val,index)=>{
                return val.userid===uid && val.userpass===upass
            })

            if(currentUser.length>0){
                window.alert("Login Success");
                sessionStorage.setItem("user",uid);
                nav("/mainDashboard");
            }

            else{
                window.alert("Wrong Credentials");
                uidRef.current.value="";
                upassRef.current.value="";
            }
            }).catch((error)=>{
            console.log(error);
        });


        // code for JWT Token

        // POST("http://localhost:8888/products",empObj).then((response)=>{
        //     if(response?.access){
        //         handleSnakbarOpen("Login Successfully","success");
        //         sessionStorage.setItem("accessToken",response.access);
        //         nav("/mainDashboard");
        //     }
        // }).catch((error)=>{})
        
    }



    return (
        <div>
            <h2>This is Login Function Component</h2>

            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <form  style={{backgroundColor:"#F2F9FF"}}> 
                        <label  className='form-label'>Enter ID:</label>
                        <input type='text' name='userid' ref={uidRef} className='form-control mb-2'></input>
                        <label  className='form-label'>Enter Password:</label>
                        <input type='text' name='userpass' ref={upassRef} className='form-control mb-2'></input>
                       

                        <button type='button' onClick={checkUser} className='btn btn-outline-primary mt-3'>Login</button>

                       
                    </form>
                </div>
                <div className="col-sm-3"></div>
             </div>
        </div>
    )
};

export default LoginComp;