import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../../src/services/authService';
import Path from "../../src/paths";
import AuthContext from "../../src/contexts/authContext";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() =>{
                logoutHandler();
                navigate(Path.Home);
            })
            .catch(() => navigate(Path.Home));

    }, []);
    return null;
}