import React, {Component, Fragment} from "react";
import MyHOCComp from "./MyHOCComp";

class ClickCounterComp extends Component{

    // constructor(){
    //     super();
    //     this.state={
    //         count:0
    //     }
    // }

    // increment = () => {
    //     this.setState((prevState)=>({count:prevState.count+1}));
    // }

    render(){
        

        return (
            <Fragment>
                <h2> This is Click Counter Component</h2>
                {/* <p>Count:{count}</p>
                <button type="button" className="btn btn-outline-primary" onClick={()=>this.increment()}>Count++</button> */}
                <p>Count:{this.props.count+2}</p>
                <button type="button" className="btn btn-outline-primary" onClick={()=>this.props.increment()}>Count++</button>
            </Fragment>
        )
    }
}

// export default ClickCounterComp;
export default MyHOCComp(ClickCounterComp,3);