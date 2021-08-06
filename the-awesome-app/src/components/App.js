import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Hello from './Hello';
import ListProducts from './ListProducts';
import ProductStore from './ProductStore';
import ViewCart from './ViewCart';
import Login from './Login';
import Logout from './Logout';


function App() {

    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">React</a>
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/store">Store</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <section className="row">
                    <Route path="/" exact component={Hello}/>
                    <Route path="/products" exact component={ListProducts}/>
                    <Route path="/store" exact component={ProductStore}/>
                    <Route path="/cart" exact component={ViewCart}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/logout" exact component={Logout}/>
                </section>
            </div>
        </Router>
    )
}

export default App;