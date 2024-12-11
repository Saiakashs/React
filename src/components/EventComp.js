import React, {Component, Fragment} from "react";
class EventComp extends Component{

    greeting = () => {
        window.alert(`Hello Everyone`);
    }

    welcome = (...std) => {
        window.alert(`Welcome You  ${std}`);
    }
    render(){
        return (
            <Fragment>
                <h2>This is Event Component</h2>
                <button type="button" onClick={()=>this.greeting()}>call greeting</button>
                <button type="button" onClick={()=>this.welcome("Sai","Arun")}>call welcome</button>
                {/* <h2 onMouseOver={()=>this.welcome("Sai","Arun","Prasath")}>Hover on me to call welcome</h2> */}
            </Fragment>
            
        )
    }
};

export default EventComp;