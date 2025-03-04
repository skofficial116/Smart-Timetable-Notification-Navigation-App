import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/timetable">Timetable</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/teachers">Teachers</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default Navbar;
