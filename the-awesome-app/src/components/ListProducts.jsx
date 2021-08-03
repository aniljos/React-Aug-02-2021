import React, {Component} from 'react';
import axios from 'axios';

class ListProducts extends Component{


    componentDidMount(){

        const url = "http://localhost:9000/products";
        axios
            .get(url)
            .then((response) => {
                console.log("success", response);
            }, (response) => {
                console.log("error", response);
            });

    }

    render(){
        return (
            <div>
                <h4>Products</h4>
            </div>
        )
    }
}

export default ListProducts;