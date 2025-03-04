import React, { createContext, useState, useEffect } from "react";
import timetableService from "../services/timetableService";

export const TimetableContext = createContext();

export const TimetableProvider = ({ children }) => {
    const [timetable, setTimetable] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTimetable();
    }, []);

    const fetchTimetable = async () => {
        const data = await timetableService.getTimetable();
        setTimetable(data);
        setLoading(false);
    };

    return (
        <TimetableContext.Provider value={{ timetable, fetchTimetable, loading }}>
            {children}
        </TimetableContext.Provider>
    );
};
