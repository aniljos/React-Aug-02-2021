import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';


function ProductStore() {

    console.log("In ProductStore...");

    //destructing(es6)
    const [searchKey, setSearchKey] = useState("");
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const cartStore = useSelector(state => state.store);
    //const [count, setCount] = useState(5);
    //const [state, setState] = useState({count: 5, search = ""});

    //componentDidMount
    useEffect(() => {

        console.log("useEffect...");

        async function fetch() {
            const url = "http://localhost:9000/products";
            try {

                const response = await axios.get(url);
                console.log(response.data);
                setProducts(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetch();


        return () => {
            console.log("useEffect invoked for unmount...");
        }
    }, []);

    //componentDidUpdate // callback
    useEffect(() => {

        console.log("useEffect...searchKey");

    }, [searchKey])


    function changeKey(evt) {
        setSearchKey(evt.target.value);

    }

    function addToCart(product){

        const cartItem = {product: product, quantity: 1};
        dispatch({type: "AddItem", payload: cartItem});

    }
    return (
        <div>
            <h4>The Store</h4>
            <div>
                <input placeholder="Search"
                    value={searchKey} onChange={changeKey} />
                <p>Searching for {searchKey}</p>

                <div style={{border: "2px solid blue"}}>
                    <h5>Cart</h5>
                    {cartStore.cart.map((item, index) => {
                        return (
                            <div>
                                <p>Name: {item.product.name}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>

                        )
                    })}
                </div>

                <div>
                    {products.map((product, index) => {
                        return (
                            <div key={index}>
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <div>
                                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductStore;