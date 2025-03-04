import React from "react";
import { Navigate } from "react-router-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem("token");
            setIsAuthenticated(!!token);
        };
        checkAuth();
    }, []);

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
