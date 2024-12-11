const UserComp=(props)=>{

    const {user}=props;

    if(user==="Akash"){
        throw Error("Not A User");
    }
    return (
        <div>
            <h2>User is {user}</h2>
        </div>
    )
};

export default UserComp;