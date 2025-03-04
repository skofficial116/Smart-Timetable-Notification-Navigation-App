import React, { createContext, useState, useEffect } from "react";
import teacherService from "../services/teacherService";

export const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        const data = await teacherService.getTeachers();
        setTeachers(data);
    };

    return (
        <TeacherContext.Provider value={{ teachers, fetchTeachers }}>
            {children}
        </TeacherContext.Provider>
    );
};
