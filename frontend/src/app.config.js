import Constants from 'expo-constants';

const API_BASE_URL = Constants.expoConfig.extra.API_BASE_URL || "http://192.168.1.100:8000";

export default {
  expo: {
    name: "CollegeApp",
    slug: "collegeapp",
    version: "1.0.0",
    extra: {
      API_BASE_URL,
      JWT_SECRET_KEY: "your_jwt_secret_key_here",
      USER_STORAGE_KEY: "@CollegeApp_user",
      TOKEN_STORAGE_KEY: "@CollegeApp_token",
    },
  },
};
