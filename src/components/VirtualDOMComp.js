import React, {Component} from "react";

class VirtualDOMComp extends Component{

    constructor(props){
        super(props);

        this.state = {
            breakFast:[
                {id:101,name:"Idly",price:'30'},
                {id:102,name:"Dosa",price:'50'},
                {id:103,name:"Vada",price:'60'},
                {id:104,name:"Upma",price:'20'},
            ],

            courses:["javascript","React","Angular","Java","Python","Dotnet"]
        }
    }
    render(){

        const {breakFast,courses}=this.state;

        return (
            <div>
                <h2> This is Virtual DOM Component</h2>
                <ul>
                    {
                        breakFast.length > 0 && breakFast.map((val,index)=>{
                            return <li key={val.id}>Item:{val.name} - Price: &#8377;{val.price}</li>
                        })
                    }
                    
                </ul>

                <hr></hr>

                <label>Select Course</label>
                <select>
                    {
                        courses.length > 0 && 
                        courses.map((val,index)=>{
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export default VirtualDOMComp;