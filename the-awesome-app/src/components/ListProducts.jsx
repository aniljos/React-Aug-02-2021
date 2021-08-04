import React, { Component } from 'react';
import axios from 'axios';
import './ListProducts.css';



class ListProducts extends Component {

    state = {
        data: []
    }
    url = "http://localhost:9000/products";
    componentDidMount() {

        
        
        this.fetch();
    }

    fetch(){
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
   
    renderProducts() {

        return this.state.data.map((item, index) => {
            return (
                <div className="product" key={index}>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                    <div>
                        <button onClick={() => {this.deleteProduct(item)}}>Delete</button>
                    </div>
                </div>
            );
        })

    }

    render() {
        return (
            <div>
                <h4>Products</h4>
                <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

export default ListProducts;