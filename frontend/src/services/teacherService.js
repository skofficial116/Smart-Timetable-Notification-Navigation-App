import apiClient from "./apiClient";

const teacherService = {
    getTeachers: async () => {
        const response = await apiClient.get("/teachers");
        return response.data;
    },

    addTeacher: async (teacherData) => {
        const response = await apiClient.post("/teachers", teacherData);
        return response.data;
    },

    deleteTeacher: async (teacherId) => {
        const response = await apiClient.delete(`/teachers/${teacherId}`);
        return response.data;
    },
};

export default teacherService;
