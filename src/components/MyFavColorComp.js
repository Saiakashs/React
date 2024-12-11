import React, { Component } from 'react'

class MyFavColorComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             color:"Red"
        }
    }

    // static getDerivedStateFromProps(props){
    //     return{
    //         color:props.newColor
    //     }
    // }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"Pink"})
    //     },2000)
    // }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML=`Before Update My Favourite Color was:${prevState.color}`;
    }

    changeColor = () => {
        this.setState({color:"blue"})
    }

    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML=`After Update My Favourite Color was:${this.state.color}`;
    }
    
    render() {
        return (
            <div>
                <h2>This is My Favourite Color Component</h2>
                <p>Color is: <strong>{this.state.color}</strong></p>
                <div id="beforeupdate"></div>
                <div id="afterupdate"></div>
                <button type="button"  onClick={()=>this.changeColor()} className="btn btn-outline-primary">
                    Change Color
                </button>
            </div>
        )
    }
}

export default MyFavColorComp
