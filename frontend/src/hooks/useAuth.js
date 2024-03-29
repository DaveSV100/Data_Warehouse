import React, { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api/'

const AuthContext = createContext();

export function ProviderAuth({ children }) {
    const auth = useProvideAuth();
    return  <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signIn = async(email, password) => {
        const options = {
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json'
            },
        };
        const { data: userData } = await axios.post(endPoints.auth.login, { email, password }, options);
        const token = userData.token;
        console.log(userData);
        if(userData) {
            Cookies.set('token', token, { expires: 5 });
        } 
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        
        console.log(userData.payload);
        setUser(userData.payload);
    };

    return {
        user,
        signIn,
    };
}