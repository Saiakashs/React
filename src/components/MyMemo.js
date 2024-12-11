import React, { Fragment } from "react";

const MyMemo=(props)=>{
    console.log("memo-comp render");
    return (
        <Fragment>
            <h2>This is Memo Component</h2>
            <p>Name:{props.empName}</p>
        </Fragment>
    )
};

export default React.memo(MyMemo);