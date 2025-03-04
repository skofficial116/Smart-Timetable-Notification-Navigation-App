import React, { createContext, useState, useEffect } from "react";
import roomService from "../services/roomService";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
    const [availableRooms, setAvailableRooms] = useState([]);

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        const data = await roomService.getAvailableRooms();
        setAvailableRooms(data);
    };

    return (
        <RoomContext.Provider value={{ availableRooms, fetchRooms }}>
            {children}
        </RoomContext.Provider>
    );
};
