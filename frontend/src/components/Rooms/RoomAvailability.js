import React, { useState, useEffect } from "react";
import axios from "axios";

const RoomAvailability = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/rooms").then((response) => setRooms(response.data));
    }, []);

    return (
        <div>
            <h2>Available Rooms</h2>
            {rooms.map((room) => (
                <p key={room.id}>{room.name} - {room.status}</p>
            ))}
        </div>
    );
};

export default RoomAvailability;
