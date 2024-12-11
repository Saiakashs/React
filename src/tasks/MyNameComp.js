import React from 'react'

const MyNameComp = (props) => {
    return (
        <div>
            <h1>This is My Name Component</h1>
            <p>My Name is: {props.name}</p>
            <p>I am: {props.post}</p>
        </div>
    )
}

export default MyNameComp
