import React from 'react';

function Hello(props){

    console.log("props: ", props);
    //return JSX(view)
    return (
        <div>
            <h4>Hello Component</h4>
            <p>This is a functional component</p>
            <p>Created at: {new Date().toLocaleDateString()} : {new Date().toLocaleTimeString()}</p>
            <p>Message: {props.message}</p>
        </div>
    )
}

export default Hello;

