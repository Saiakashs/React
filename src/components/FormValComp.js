import React, { useState } from 'react'

const FormValComp = () => {

    let mycourses=["HTML","CSS","Javascript","React","Angular"];

    const [user,setUser]=useState({
        fname:"",
        password:"",
        email:"",
        contact:"",
        course:"",
        gender:false,
        term:false
    });

    const changeInput =(event)=>{
    //     console.log(event.target.type);
    //     console.log(event.target.name);
    //     console.log(event.target.value);
    // 

        const {type,name,value,checked}=event.target;

        setUser({...user,[name]:type==="checkbox" || type==="radio" ?checked:value});

    }

    const checkData = (event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("fname is required");
            return false;
        }

        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("fname must contain characters with min:3 and max:20");
            return false;
        }

        if(user.password.trim()===""){
            window.alert("password is required");
            return false;
        }

        if(!user.password.trim().match("^[a-zA-Z0-9!@#$%^&*()_+]{8,12}$")){
            window.alert("password must contain one lowercase letter, one upercase letter,one special character with min:8 and max:12");
            return false;
        }

        if(user.email.trim()===""){
            window.alert("email is required");
            return false;
        }

        if(!user.password.trim().match("^[a-zA-Z0-9@.]{8,25}$")){
            window.alert("enter valid email");
            return false;
        }

        if(user.contact.trim()===""){
            window.alert("contact is required");
            return false;
        }

        if(!user.contact.trim().match("^[0-9]{9,11}$")){
            window.alert("contact must contain only numbers with min:9 and max:11");
            return false;
        }

        if(user.course===""){
            window.alert("Please select your courses");
            return false;
        }


        if(user.gender===false){
            window.alert("Please accept it");
            return false;
        }

        if(user.term===false){
            window.alert("Please accept term and condition");
            return false;
        }
        window.alert(JSON.stringify(user));
    }


    return (
        <div>
            <h2>This is Form Validation Component</h2>
            <form onSubmit={checkData}>
                <div>
                    <label for="name">Enter Your FullName:</label>
                    <input type="text" name="fname" id="name" value={user.fname} onChange={changeInput}></input>
                </div>

                <div>
                    <label for="password">Enter Your Password:</label>
                    <input type="password" name="password" id="password" value={user.password} onChange={changeInput}></input>
                </div>

                <div>
                    <label for="email">Enter Your Email:</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={changeInput}></input>
                </div>

                <div>
                    <label for="contact">Enter Your Phone Number:</label>
                    <input type="tel" name="contact" id="contact" value={user.contact} onChange={changeInput}></input>
                </div>

                <div>
                    <label for="course">Select Your Course</label>
                    <select name="course" onChange={changeInput}>
                        <option value="">Select Course</option>

                        {
                            mycourses.map((val,index)=>{
                              return  <option value={val} key={index}>{val}</option>
                            })
                        }
                    </select>
                </div>

                <div>
                <input type="radio" name="gender" value={user.gender} onChange={changeInput}></input>Male
                </div>

                <div>
                <input type="checkbox" name="term" value={user.term} onChange={changeInput}></input>Accept the term and conditions
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default FormValComp
