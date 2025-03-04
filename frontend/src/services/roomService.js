import apiClient from "./apiClient";

const roomService = {
    getAvailableRooms: async () => {
        const response = await apiClient.get("/rooms/available");
        return response.data;
    },

    bookRoom: async (roomId, bookingData) => {
        const response = await apiClient.post(`/rooms/book/${roomId}`, bookingData);
        return response.data;
    },
};

export default roomService;
