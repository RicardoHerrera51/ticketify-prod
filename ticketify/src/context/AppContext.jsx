import React, { useState, useMemo, useCallback, useEffect } from "react";
import { loginFecth, loginWithGoogleFecth } from '../services/UserService';

const AppContext = React.createContext();
const TOKEN_KEY = "token";
const USER_ROLE = "role";
const USER_ID = "id";

export const AppProvider = (props) => {
    const [token, setToken] = useState();
    const [roleName, setRoleName] = useState([]);
    const [id, setId] = useState();

    const setTokenAll = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        setToken(token);
    }

    const setIdAll = (id) => {
        localStorage.setItem(USER_ID, id);
        setId(id);
    }

    const setRoleAll = (roles) => {
        localStorage.setItem(USER_ROLE, JSON.stringify(roles));
        setRoleName(roles);
    }

    const login = useCallback((email, password, isGoogleSignin) => {
        const loginAsync = async () => {
            let status = false;
            try {
                let response
                if (isGoogleSignin) {
                    response = await loginWithGoogleFecth(email);
                } else {
                    response = await loginFecth(email, password);
                }
                if (response && response.token) {
                    setIdAll(response.id);
                    setTokenAll(response.token);
                    setRoleAll(response.roleName);
                    status = true;
                }
            } catch (error) {
                console.error(error);
            } finally {
                return status;
            }
        };
        return loginAsync();
    }, [token, roleName, id])

    const logout = useCallback(() => {
        setRoleName(undefined);
        localStorage.removeItem(USER_ROLE)
        setTokenAll(undefined);
        localStorage.removeItem(TOKEN_KEY)
        setIdAll(undefined);
        localStorage.removeItem(USER_ID)
    }, [])

    const value = useMemo(() => ({
        token: token,
        roleName: roleName,
        id: id,
        login: login,
        logout: logout
    }), [token, roleName, id, login, logout]);

    return <AppContext.Provider value={value} {...props} />;
}

export const useAppContext = () => {
    const context = React.useContext(AppContext);

    if (!context) {
        throw new Error("must be inside of Provider");
    }

    return context;
}

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getId = () => localStorage.getItem(USER_ID);
export const getRoleNames = () => localStorage.getItem(USER_ROLE);