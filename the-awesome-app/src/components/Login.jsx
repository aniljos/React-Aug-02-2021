import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Login(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function login() {

        const url = process.env.REACT_APP_LOGIN_URL;
        if (userName && password) {
            try {

                const response = await axios.post(url, { name: userName, password: password });
                props.history.push("/products");

            } catch (error) {

                alert("Login Failed");
            }
        }
        else {
            alert("Please enter the credentials");
        }


    }
    return (
        <div>
            <h3>Login</h3>

            <p>UserName</p>
            <div>
                <input className="form-control" value={userName}
                    onChange={(evt) => setUserName(evt.target.value)} />
            </div>
            <p>Password</p>
            <div>
                <input className="form-control" type="password" value={password}
                    onChange={(evt) => setPassword(evt.target.value)} />
            </div>
            <br />
            <button className="btn btn-success" onClick={login}>Login</button>
        </div>
    )
}

export default Login;