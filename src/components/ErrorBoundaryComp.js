import React, {Component} from "react";

class ErrorBoundaryComp extends Component{

    constructor(props){
        super(props);

        this.state={
            isCond:false
        }

    }

    static getDerivedStateFromError(){
        return {
            isCond:true
        }
    }

    render(){

        if(this.state.isCond){
            return <div>Not A User</div>
        }
        return this.props.children;
    }
}

export default ErrorBoundaryComp;