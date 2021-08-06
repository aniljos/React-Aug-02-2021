import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//functional component
function Logout(props) {

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch({
            type: "SET_AUTH", payload: {
                isAuth: false,
                accessToken: "",
                refreshToken: ""
            }});
        
    }, [])
    //return the view(JSX)
    return (
        <div>
            <h4>You have been logged out successfully</h4>
            <p>
                <Link to="/login">Login</Link>
            </p>
        </div>
    );
}


export default Logout;