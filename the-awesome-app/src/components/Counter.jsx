import React, {Component} from 'react';

// var obj = new Counter();
// obj.inc();

// inc()

class Counter extends Component{

    //state(any data type)
    //state should be considered to be immutable
    state = {
        count: 5
    }
    valueFieldRef = React.createRef()

    constructor(props){
        super(props);
        this.inc = this.inc.bind(this);
    }

    //Event handler == Arrow function/ Bind to this
    inc(evt){
        console.log("in inc", evt, this);
      //  this.state.count++;
      const updatedCount = this.state.count + 1;
      //this.setState(slice of the updated state, callback)
      this.setState({
          count: updatedCount
      });
    }

    decr = () => {
        const updatedCount = this.state.count - 1;

        //setState is async
        this.setState({
            count: updatedCount
        }, () => {
            console.log("count: ", this.state.count);
        });
        
    }

    change = (evt) => {

        const value = evt.target.value;
        this.setState({
            count: value ? parseInt(value) : 0
        });
    }

    update = () => {

        const value = this.valueFieldRef.current.value
        if(value){
            this.setState({
                count: parseInt(value)
            });
        }
        
    }

    render(){

        //return JSX/View

        return (
            <div>
                <h4>{this.props.title}: {this.state.count}</h4>
                <p>This is a class-component</p>
                <div>
                    <button onClick={this.inc}>Inc</button>&nbsp;
                    <button onClick={this.decr}>Decr</button>
                </div>
                <div>
                    {/* Controlled Input */}
                    Count: <input type="number" value={this.state.count} onChange={this.change}/>
                </div>
                <div>
                    {/* Uncontrolled input */}
                    Enter a Value: <input type="number" ref={this.valueFieldRef}/> &nbsp;
                    <button onClick={this.update}>Update</button>
                </div>
            </div>
           
        )
    }

}

export default Counter;



