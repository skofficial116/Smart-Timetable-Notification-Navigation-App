import { AppRegistry } from "react-native";
import App from "./App";  // Import the main App component
import { name as appName } from "./app.json";  // Fetch app name from config

// Register the main application
AppRegistry.registerComponent(appName, () => App);
