import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class ProductStoreClass extends PureComponent {


    state = {
        products: []
    }
    async componentDidMount() {
        const url = "http://localhost:9000/products";
        try {

            const response = await axios.get(url);
            console.log(response.data);
            this.setState({
                products: response.data
            });

        } catch (error) {
            console.log(error);
        }
    }

    addToCart = (product) => {

        const cartItem = { product: product, quantity: 1 };

        this.props.dispatchCartItem(cartItem);
    }
    render() {

        return (
            <div class="row">
                <h4 className="row">Product Store Class</h4>
                <div className="row card bg-light mb-3" >
                    <h5 className="card-header">Cart</h5>

                    <div className="card-body">
                        {this.props.cartStore.cart.map((item, index) => {
                            return (
                                <div>
                                    <p className="card-title">Name: {item.product.name}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>

                            )
                        })}
                    </div>
                </div>
                <div class="row row-cols-12 g-4">
                    <div className="card-group">

                        {this.state.products.map((product, index) => {
                            console.log("render...")
                            return (
                                <div className="card " key={index}>
                                    <p className="card-header">{product.name}</p>
                                    <div className="card-body">
                                        <p>{product.description}</p>
                                        <p>{product.price}</p>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-primary" onClick={() => this.addToCart(product)}>Add to Cart</button>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

            </div>
        );
    }
}

//Map the redux state to the component props
const mapStateToProps = (state) => {
    return {
        cartStore: state.store,
        authStore: state.auth
    }
}
//Map the redux dispatch to the component props
const mapDispatchToProps = (dispatch) => {
    return {

        dispatchCartItem: (cartItem) => { dispatch({ type: "AddItem", payload: cartItem }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductStoreClass);