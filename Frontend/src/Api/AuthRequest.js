import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});


export const logIn = (formData) =>
  API.post("api/v1/auth/authenticate", formData);

export const signUp = (formData) => API.post("/api/v1/auth/register", formData);
export const fetchStudentDetails = (id) =>
  API.get(`/api/v1/student/dashboard/${id}`);
export const fetchInstructorDetails = (id) =>
  API.get(`/api/v1/instructor/dashboard/${id}`);
