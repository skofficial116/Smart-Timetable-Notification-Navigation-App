import React, { useEffect, useState } from "react";
import axios from "axios";

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/teachers").then((response) => setTeachers(response.data));
    }, []);

    return (
        <div>
            <h2>Teachers</h2>
            {teachers.map((teacher) => (
                <div key={teacher.id}>{teacher.name}</div>
            ))}
        </div>
    );
};

export default TeacherList;
