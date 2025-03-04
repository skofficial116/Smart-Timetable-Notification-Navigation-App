import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TimetableScreen from "../screens/Timetable/TimetableScreen";
import CourseScreen from "../screens/Courses/CourseScreen";
import TeacherScreen from "../screens/Teachers/TeacherScreen";
import RoomScreen from "../screens/Rooms/RoomScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Timetable" component={TimetableScreen} />
            <Tab.Screen name="Courses" component={CourseScreen} />
            <Tab.Screen name="Teachers" component={TeacherScreen} />
            <Tab.Screen name="Rooms" component={RoomScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
    );
};

export default MainNavigator;
