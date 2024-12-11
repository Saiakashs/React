import React, {Fragment, PureComponent} from "react";

class MyPureComp extends PureComponent{
    render(){
        console.log("pure-comp render")
        return (
            <Fragment>
                <h2> This is My Pure Component</h2>
                <p>Name:{this.props.empName}</p>
            </Fragment>
        )
    }
}

export default MyPureComp;