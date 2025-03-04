// Import core dependencies
import React, { useEffect, useContext, useState } from "react";
import { StatusBar, ActivityIndicator, View, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import navigation stacks
import AuthNavigator from "./navigation/AuthNavigator";  // Handles login/signup
import MainNavigator from "./navigation/MainNavigator";  // Handles home, timetable, etc.

// Import authentication context
import { AuthContext, AuthProvider } from "./context/AuthContext";

// Import styling
import colors from "./assets/styles/colors";

// Define main application logic
const AppContent = () => {
    // Get authentication state from context
    const { user, setUser, loading, setLoading } = useContext(AuthContext);

    // State to check if AsyncStorage has loaded
    const [appReady, setAppReady] = useState(false);

    useEffect(() => {
        // Function to retrieve user session data from storage
        const checkUserSession = async () => {
            setLoading(true);
            try {
                const userData = await AsyncStorage.getItem("user");
                if (userData) {
                    const parsedUser = JSON.parse(userData);
                    console.log("User found in storage:", parsedUser);
                    setUser(parsedUser);  // Set user state
                } else {
                    console.log("No user found, showing login screen.");
                }
            } catch (error) {
                console.error("Error retrieving user session:", error);
                Alert.alert("Error", "Failed to load user data.");
            }
            setLoading(false);
            setAppReady(true);
        };

        checkUserSession();
    }, []);

    // Show loading screen while fetching session
    if (!appReady) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {user ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

// Wrap AppContent inside the AuthProvider for global state
export default function App() {
    return (
        <AuthProvider>
            <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
            <AppContent />
        </AuthProvider>
    );
}
