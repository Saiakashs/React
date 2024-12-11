import React, {Component} from "react";

class EmpDetailsComp extends Component{

    constructor(props){
        super(props);

        this.state = {
            emp:[
                {empId:101,empName:"Sai",empPost:"Full Stack Developer",empSal:300000,empContact:9360335010,empAddress:"Tirunelveli"},
                {empId:102,empName:"Arun",empPost:"Frontend Developer",empSal:300000,empContact:8860335010,empAddress:"Pondichery"},
                {empId:103,empName:"prasath",empPost:"Backend Developer",empSal:300000,empContact:7760335010,empAddress:"Perambulur"},
                {empId:104,empName:"Sankresh",empPost:"Tester",empSal:300000,empContact:6660335010,empAddress:"Tanjavur"},
                {empId:105,empName:"karthi",empPost:"Full Stack Developer",empSal:300000,empContact:5560335010,empAddress:"Chennai"},
                {empId:106,empName:"Sriram",empPost:"Frontend Developer",empSal:300000,empContact:9087654321,empAddress:"Chennai"},
                {empId:107,empName:"Kishore",empPost:"Frontend Developer",empSal:300000,empContact:8097654321,empAddress:"Vellore"},
                {empId:108,empName:"Selva",empPost:"Backend Developer",empSal:300000,empContact:7890654321,empAddress:"Chengalpattu"},
                {empId:109,empName:"Deva",empPost:"Tester",empSal:300000,empContact:6789054321,empAddress:"vilupuram"},
                {empId:110,empName:"Nathesh",empPost:"Full Stack Developer",empSal:300000,empContact:5678904321,empAddress:"Trichy"},
            
            ]


        }
    }

    render(){
         const {emp}=this.state;
        return (
            <div>
                <h2> This is Employee Class Component</h2>
                <table className="table table-bordered table-striped table-primary table-hover">
                    <tr class="table-warning">
                        <th class="thead-dark ">ID</th>
                        <th class="thead-dark">Name</th>
                        <th class="thead-dark">Post</th>
                        <th class="thead-dark">Salary</th>
                        <th class="thead-dark">Contact</th>
                        <th class="thead-dark">Address</th>
                    </tr>

                    {
                        emp.length > 0 && emp.map((val,index)=>{
                            return <tr>
                                <td key={val.empId}>{val.empId}</td>
                                <td key={val.empId}>{val.empName}</td>
                                <td key={val.empId}>{val.empPost}</td>
                                <td key={val.empId}>{val.empSal}</td>
                                <td key={val.empId}>{val.empContact}</td>
                                <td key={val.empId}>{val.empAddress}</td>
                            </tr>
                        })
                    }
                </table>
                
            </div>
        )
    }
}

export default EmpDetailsComp;