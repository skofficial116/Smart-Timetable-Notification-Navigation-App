import apiClient from "./apiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authService = {
    signup: async (userData) => {
        const response = await apiClient.post("/auth/signup", userData);
        return response.data;
    },

    login: async (credentials) => {
        const response = await apiClient.post("/auth/login", credentials);
        const { access_token } = response.data;
        await AsyncStorage.setItem("token", access_token);
        return response.data;
    },

    logout: async () => {
        await AsyncStorage.removeItem("token");
    },
};

export default authService;
