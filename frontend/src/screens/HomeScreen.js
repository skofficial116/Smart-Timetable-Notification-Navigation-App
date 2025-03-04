import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <h1>Welcome to College Management System</h1>
            <p>Manage courses, teachers, rooms, and timetables efficiently.</p>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Signup</button></Link>
        </div>
    );
};

export default HomeScreen;
