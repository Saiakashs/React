import React, {Component} from "react";

class ConditionalRenderingComp extends Component{

    constructor(){
        super();
        this.state={
            isCond:true
        }
    }
    render(){

        //1. use of if else
        
        // if(!this.state.isCond){
        //     return <h2>Admin login Successfully</h2>
        // }
        // else{
        //     return <h2>User Login Successfully</h2>
        // }
        // <h2> This is Conditional Rendering Component</h2>

        //2. use of element as variable

        // let msg="";
        // if(this.state.isCond){
        //     msg="Admin Login Successfully";
        // }
        // else{
        //     msg="User Login Successfully";
        // }
        // return <h2>{msg}</h2>

        //3. use of ternary operator

        // return (this.state.isCond) ? <h2>Admin login Successfully</h2> : <h2>User Login Successfully</h2>

        //4. use of short circuit

        return this.state.isCond && <h2>Admin login Successfully</h2>

    }
}

export default ConditionalRenderingComp;