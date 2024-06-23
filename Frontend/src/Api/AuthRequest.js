import axios from "axios";

const API = axios.create({
  baseURL:
    "https://34d4-2402-d000-a400-7da1-dc5e-ba72-fd96-feaa.ngrok-free.app",
});
const DETAILSAPI = axios.create({
  baseURL:
    "https://34d4-2402-d000-a400-7da1-dc5e-ba72-fd96-feaa.ngrok-free.app",
});

export const logIn = (formData) =>
  API.post("api/v1/auth/authenticate", formData);

export const signUp = (formData) => API.post("/api/v1/auth/register", formData);
export const fetchStudentDetails = (id) =>
  DETAILSAPI.get(`/api/v1/student/dashboard/${id}`);
export const fetchInstructorDetails = (id) =>
  DETAILSAPI.get(`/api/v1/instructor/dashboard/${id}`);
