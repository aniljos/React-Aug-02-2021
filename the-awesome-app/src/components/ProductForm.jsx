import React, { Component } from 'react';

class ProductForm extends Component {

    state = {
        currentProduct: {}
    }

    constructor(props){
        super(props);

        this.state.currentProduct = this.props.product;
        console.log("[ProductForm constructor]");
    }

    changeDesc = (evt) => {
        
        const desc = evt.target.value;
        //create a copy of current product using the spread operator
        const copy = {...this.state.currentProduct};
        copy.description = desc;
        this.setState({
            currentProduct: copy
        });

    }
    changePrice = (evt) => {
        
        const price = evt.target.value;
        //create a copy of current product using the spread operator
        const copy = {...this.state.currentProduct};
        copy.price = parseFloat(price);
        this.setState({
            currentProduct: copy
        });

    }

    save = () => {

        if(this.props.onSave){
            this.props.onSave(this.state.currentProduct);
        }

    }
    render() {
        return (
            <div>
                <h4>Edit Product: </h4>

                <p>Name</p>
                <div>
                    <input value={this.state.currentProduct.name} 
                                onChange={(evt) => {this.setState({currentProduct: {...this.state.currentProduct, name: evt.target.value}})}}/>
                </div>

                <p>Description</p>
                <div>
                    <input value={this.state.currentProduct.description} onChange={this.changeDesc}/>
                </div>

                <p>Price</p>
                <div>
                    <input value={this.state.currentProduct.price} onChange={this.changePrice}/>
                </div>

                <div>
                    <button onClick={this.save}>Save</button> &nbsp;
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
}

export default ProductForm;