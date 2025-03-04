import React, { useEffect, useState } from "react";
import axios from "axios";

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/courses").then((response) => setCourses(response.data));
    }, []);

    return (
        <div>
            <h2>Courses</h2>
            {courses.map((course) => (
                <div key={course.id}>{course.name}</div>
            ))}
        </div>
    );
};

export default CourseList;
