import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ProductStore() {

    console.log("In ProductStore...");

    //destructing(es6)
    const [searchKey, setSearchKey] = useState("");
    const [products, setProducts] = useState([]);
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
    return (
        <div>
            <h4>The Store</h4>
            <div>
                <input placeholder="Search"
                    value={searchKey} onChange={changeKey} />
                <p>Searching for {searchKey}</p>

                <div>
                    {products.map((product, index) => {
                        return (
                            <div key={index}>
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <div>
                                    <button>Add to Cart</button>
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