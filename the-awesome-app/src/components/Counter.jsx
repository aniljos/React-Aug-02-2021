import React, {Component} from 'react';


class Counter extends Component{

    //state(any data type)
    state = {
        count: 5
    }


    render(){

        //return JSX/View

        return (
            <div>
                <h4>{this.props.title}: {this.state.count}</h4>
                <p>This is a class-component</p>
            </div>
           
        )
    }

}

export default Counter;



