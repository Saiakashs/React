
import React,{Component} from "react";
import petra from "../assets/images/1_petra_jordan.jpeg";
import wall from "../assets/images/2_wall_china.jpg";
import christ from "../assets/images/3_christ_redeemer_brazil.jpg";
import colosseum from "../assets/images/4_colosseum_italy.jpeg";

class MultipleImgComp extends Component{
    details={
        Id3:103,
        Name3:"Ashwin"
    }

    constructor(){
        super();

        this.state={
            imgpic1:petra,
            imgpic2:wall,
            imgpic3:christ,
            imgpic4:colosseum,
            button:0
        }

    }
    
    
    toggleImage = (value) => {
        if(value===1){
            this.setState((prevState) => ({
                imgpic1: prevState.imgpic2
            }))
        }
        else if(value===2){
            this.setState((prevState) => ({
                imgpic1: prevState.imgpic3
            }))
        }
        else if(value===3){
            this.setState((prevState) => ({
                imgpic1: prevState.imgpic4
            }))
        }
        else if(value===4){
            this.setState((prevState) => ({
                imgpic1: petra
            }))
        }
        
    };


            

    


    render() {
        return(
            <div>
                <h2>This is Toggle Image Class Component</h2>
                <div>
                    <img src={this.state.imgpic1} alt="Petra" style={{width:"100px",height:"100px"}}></img>
                </div>
                <button type="button" className="btn btn-outline-primary btn-sm m-2" onClick={()=>this.toggleImage(1)}>Wall</button>
                <button type="button" className="btn btn-outline-primary btn-sm m-2" onClick={()=>this.toggleImage(2)}>Christ</button>
                <button type="button" className="btn btn-outline-primary btn-sm m-2" onClick={()=>this.toggleImage(3)}>Colosseum</button>
                <button type="button" className="btn btn-outline-primary btn-sm m-2" onClick={()=>this.toggleImage(4)}>Petra</button>

            </div>
        )
        }

    }


export default MultipleImgComp;
