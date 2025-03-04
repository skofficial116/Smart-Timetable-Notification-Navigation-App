import React, { createContext, useState, useEffect } from "react";
import courseService from "../services/courseService";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        const data = await courseService.getCourses();
        setCourses(data);
    };

    return (
        <CourseContext.Provider value={{ courses, fetchCourses }}>
            {children}
        </CourseContext.Provider>
    );
};
