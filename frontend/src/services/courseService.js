import apiClient from "./apiClient";

const courseService = {
    getCourses: async () => {
        const response = await apiClient.get("/courses");
        return response.data;
    },

    addCourse: async (courseData) => {
        const response = await apiClient.post("/courses", courseData);
        return response.data;
    },

    deleteCourse: async (courseId) => {
        const response = await apiClient.delete(`/courses/${courseId}`);
        return response.data;
    },
};

export default courseService;
