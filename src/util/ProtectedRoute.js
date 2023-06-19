import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const ProtectedRoute = () => {

    // const isLoggedIn = JSON.parse(localStorage.getItem('token'));


    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log("islogggg", isLoggedIn)
    const checkUserToken = () => {
        const userToken = localStorage.getItem('userDataToken');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserToken();
    }, []);

    return (
        <React.Fragment>
            {
                isLoggedIn ? <Outlet /> : <> <checkUserToken /></>
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;