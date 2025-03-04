import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            setUser({ token });
        }
        setLoading(false);
    };

    const login = async (credentials) => {
        const response = await authService.login(credentials);
        if (response.access_token) {
            setUser({ token: response.access_token });
        }
    };

    const logout = async () => {
        await authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
