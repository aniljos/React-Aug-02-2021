import React, { Component, PureComponent } from 'react';
import axios from 'axios';
import './ListProducts.css';
import ProductForm from './ProductForm';
import {connect} from 'react-redux';


class ListProducts extends Component {

    state = {
        data: [],
        selectedProduct: null
    }
    //url = "http://localhost:9000/products";
    url = "http://localhost:9000/secure_products";

    constructor(props){
        super(props);
        console.log("[ListProducts constructor]")
    }
    componentDidMount() {

        this.fetch();
        console.log("[ListProducts componentDidMount]")
    }

    fetch() {

        // Authorization: Bearer ...token...
        const headers = {Authorization: `Bearer ${this.props.authStore.accessToken}` }
        axios
            .get(this.url, {headers: headers})
            .then((response) => {
                console.log("success", response);
                this.setState({
                    data: response.data
                });
            }, (error) => {
                console.log("error", error);
                if(error.response.status && error.response.status === 403){

                    this.refreshAndfetch();
                   
                }
                
            });
    }

    async refreshAndfetch(){

        try {
            alert("refreshing token");
            const refreshUrl = process.env.REACT_APP_REFRESH_URL;
            const resp = await axios.post(refreshUrl, {token: this.props.authStore.refreshToken});
            const updatedAccessToken = resp.data.accessToken;
            this.props.updateAccessToken(updatedAccessToken);
            const headers = {Authorization: `Bearer ${updatedAccessToken}` }
            const productsresponse = await axios.get(this.url, {headers})
            this.setState({
                data: productsresponse.data
            });

            this.fetch();
        } catch (error) {
            alert("Failed to fetch data");
        }
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

            const headers = {Authorization: `Bearer ${this.props.authStore.accessToken}` }
            const response = await axios.delete(this.url + "/" + product.id, {headers});
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
            
            const headers = {Authorization: `Bearer ${this.props.authStore.accessToken}` }
            const response = await axios.put(this.url + "/" + product.id, product, {headers});
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
                        <button className="btn btn-danger" onClick={() => { this.deleteProduct(item) }}>Delete</button> &nbsp;
                        <button className="btn btn-primary" onClick={() => { this.editProduct(item) }}>Edit</button>
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

const mapStateToProps = (reduxState) => {

    return{
        authStore: reduxState.auth
    }
    
}

const mapDispatchToProps = (dispatch)=> {

    return {
        updateAccessToken : (token) => {dispatch({type: "UPDATE_ACCESS_TOKEN", token: token})}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);