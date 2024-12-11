import React, {Component} from "react";

class MyStateComp extends Component{

    constructor(){
        super();
        this.state={
            empName:"Akash",
            empSal:85000
        }
    }

    changeStateData = () =>{
        // this.setState({empName:"Akash",empSal:this.state.empSal+10000});
        this.setState((prevState)=>({empName:"Akash S",empSal:prevState.empSal+10000}));
    }

    render(){
        return (
            <div>
                <h2> This is State Component</h2>
                <p>Employee Name:<strong>{this.state.empName}</strong> and Salary:<strong>{this.state.empSal}</strong></p>
                <button type="button" className="btn btn-outline-primary" onClick={()=>this.changeStateData()}>Change State Data</button>
            </div>
        )
    }
}

export default MyStateComp;