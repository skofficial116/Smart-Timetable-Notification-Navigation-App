import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomCard from "./RoomCard";

const RoomAvailability = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/rooms").then((response) => setRooms(response.data));
    }, []);

    return (
        <div>
            <h2>Available Rooms</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </div>
    );
};

export default RoomAvailability;
