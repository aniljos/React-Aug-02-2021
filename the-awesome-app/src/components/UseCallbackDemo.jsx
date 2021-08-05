import React, { useState, useCallback } from 'react';

//React.memo ==> 16.3
const Simple = React.memo( (props) => {
    console.log("executing simple..");
    return (
        <div>
            <h4>Simple</h4>
            <p>Value: {props.value}</p>
            <button onClick={() => props.onChange(props.value + 1)}>Update</button>
        </div>
    );
});

const UseCallbackDemo = () => {

    
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // function update(value){
    //     console.log("in update", value);
    //     setCount(value);
    // }

    const update = useCallback(function update(value){
        console.log("in update", value);
        setCount(value);
    }, [count]);

    return (
        <div>
            <h3>UseCallback Demo</h3>

            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count+1)}>Increment</button>
            </div>
            <div>
                <input placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
            </div>

            <Simple value={count} onChange={update}/>
        </div>
    )
}

export default UseCallbackDemo;