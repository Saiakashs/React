import React, { Component, Fragment } from "react";

const MyHOCComp = (WrapperComp,val) =>{

    class Hoc extends Component{

        constructor(){
            super();
            this.state={
                count:0
            }
        }
    
        increment = () => {
            this.setState((prevState)=>({count:prevState.count+val}));
        }

        render(){
            const {count}=this.state;

            return <WrapperComp count={count} increment={()=>this.increment()} />
        }

    }

    return Hoc;
}

export default MyHOCComp;