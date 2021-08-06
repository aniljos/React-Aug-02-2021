import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function ViewCart() {

    const cart = useSelector(state => state.store.cart);
    const dispatch = useDispatch()

    function remove(item){
        dispatch({type: "RemoveItem", productId: item.product.id})
    }
    return (
        <div>
            <h5 >Cart</h5>
            {cart.length !== 0 ? null : <h5> The cart is empty</h5> }

            <div className="card-body">
                {cart.map((item, index) => {
                    return (
                        <div className="card bg-light mb-3">
                            <p className="card-header">{item.product.name}</p>
                            <div className="card-body">
                                <p className="card-text">{item.product.description}</p>
                                <p className="card-text">Quantity: {item.quantity}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success" onClick={() => {remove(item)}}>Remove</button>
                            </div>

                        </div>

                    )
                })}
            </div>
        </div>
    );
}

export default ViewCart;