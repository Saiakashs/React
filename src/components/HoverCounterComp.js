import React, {Component, Fragment} from "react";
import MyHOCComp from "./MyHOCComp";

class HoverCounterComp extends Component{

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
                <h2> This is Hover Counter Component</h2>
                {/* <p>Count:{count}</p>
                <p onMouseOver={()=>this.increment()}>Hover on Me</p> */}
                <p>Count:{this.props.count+4}</p>
                <p onMouseOver={()=>this.props.increment()}>Hover on Me</p>
            </Fragment>
        )
    }
}

// export default HoverCounterComp;
export default MyHOCComp(HoverCounterComp,5);