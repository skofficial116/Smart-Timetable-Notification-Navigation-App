import React from "react";
import { Link } from "react-router-dom";

const DashboardScreen = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="/timetable"><button>Timetable</button></Link>
                <Link to="/courses"><button>Courses</button></Link>
                <Link to="/teachers"><button>Teachers</button></Link>
                <Link to="/rooms"><button>Room Availability</button></Link>
            </nav>
        </div>
    );
};

export default DashboardScreen;
