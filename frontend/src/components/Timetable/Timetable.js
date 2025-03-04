import React, { useEffect, useState } from "react";
import axios from "axios";
import TimetableCard from "./TimetableCard";

const Timetable = () => {
    const [timetable, setTimetable] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/timetable");
            setTimetable(response.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Class Timetable</h2>
            {timetable.map((entry) => (
                <TimetableCard key={entry.id} entry={entry} />
            ))}
        </div>
    );
};

export default Timetable;
