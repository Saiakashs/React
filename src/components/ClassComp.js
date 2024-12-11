import React, {Component} from "react";

class ClassComp extends Component{
    render(){
        return (
            <div>
                <h2> This is Class Component</h2>
                <p>My name is <strong>{this.props.fname}</strong> I am a <strong>{this.props.post}</strong></p>
            </div>
        )
    }
}

export default ClassComp;