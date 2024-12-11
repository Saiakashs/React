import React,{Component} from "react";
import petra from "../assets/images/1_petra_jordan.jpeg";
import wall from "../assets/images/2_wall_china.jpg";

class ToggleImgComp extends Component{
    details={
        Id3:103,
        Name3:"Ashwin"
    }

    constructor(){
        super();

        this.state={
            imgpic1:petra,
            imgpic2:wall,
            button:0
        }

    }
    
    
    toggleImage = () => {
        this.setState((prevState) => ({
            button: prevState.button + 1,
            imgpic1: prevState.button % 2 === 0 ? prevState.imgpic2 : petra
        }))
    };


            

    


    render() {
        return(
            <div>
                <h2>This is Toggle Image Class Component</h2>
                <div>
                    <img src={this.state.imgpic1} alt="petra" style={{width:"100px",height:"Petra"}}></img>
                </div>
                <button type="button" className="btn btn-outline-primary btn-sm m-2" onClick={()=>this.toggleImage()}>ToggleImage</button>

            </div>
        )
        }

    }


export default ToggleImgComp;