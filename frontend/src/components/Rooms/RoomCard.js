import React from "react";

const RoomCard = ({ room }) => {
    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{room.name}</h3>
            <p><strong>Capacity:</strong> {room.capacity}</p>
            <p>
                <strong>Status:</strong>{" "}
                <span style={room.is_available ? styles.available : styles.occupied}>
                    {room.is_available ? "Available" : "Occupied"}
                </span>
            </p>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
        margin: "10px",
        textAlign: "center",
        backgroundColor: "#fff",
    },
    title: {
        color: "#333",
    },
    available: {
        color: "green",
        fontWeight: "bold",
    },
    occupied: {
        color: "red",
        fontWeight: "bold",
    },
};

export default RoomCard;
