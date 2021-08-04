import React, { Component, PureComponent } from 'react';
import axios from 'axios';
import './ListProducts.css';
import ProductForm from './ProductForm';



class ListProducts extends PureComponent {

    state = {
        data: [],
        selectedProduct: null
    }
    url = "http://localhost:9000/products";

    constructor(props){
        super(props);
        console.log("[ListProducts constructor]")
    }
    componentDidMount() {

        this.fetch();
        console.log("[ListProducts componentDidMount]")
    }

    fetch() {
        axios
            .get(this.url)
            .then((response) => {
                console.log("success", response);
                this.setState({
                    data: response.data
                });
            }, (response) => {
                console.log("error", response);
            });
    }

    deleteProduct = async (product) => {

        // axios
        //     .delete(this.url + "/" + product.id)
        //     .then(() => {
        //         alert("deleted");
        //     }, () => {
        //         alert("failed to delete");
        //     });

        //async -await (ES7) ==> Promise

        try {

            const response = await axios.delete(this.url + "/" + product.id);
            alert("deleted");
            this.fetch();

        } catch (error) {
            alert("failed to delete");
        }
    }

    editProduct = (product) => {

        this.setState({
            selectedProduct: product
        });
    }

    updateProduct = async (product) => {
        //login to update the product
        alert("Updating product", product.name);
        console.log("updateProduct", product);

        try {
            
            const response = await axios.put(this.url + "/" + product.id, product);
            this.setState({
                selectedProduct: null
            }, ()=> {
                this.fetch();
                alert("updated");
            })

        } catch (error) {
            alert("failed to update");
        }
    }

    renderProducts() {

        return this.state.data.map((item, index) => {
            return (
                <div className="product" key={index}>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                    <div>
                        <button onClick={() => { this.deleteProduct(item) }}>Delete</button> &nbsp;
                        <button onClick={() => { this.editProduct(item) }}>Edit</button>
                    </div>
                </div>
            );
        })

    }

    render() {

        console.log("[ListProducts render]");
        return (
            <div>
                <h4>Products</h4>
                <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>
                    {this.renderProducts()}
                </div>

                {this.state.selectedProduct !== null ? (<div>
                    <ProductForm key={this.state.selectedProduct.id} 
                                product={this.state.selectedProduct} onSave={this.updateProduct}/>
                </div>) : null}
            </div>
        );
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[ListProducts shouldComponentUpdate]");
    //     return true;
    // }
    componentDidUpdate(){
        console.log("[ListProducts componentDidUpdate]")
    }
    componentWillUnmount(){
        console.log("[ListProducts componentWillUnmount]");
    }
}

export default ListProducts;