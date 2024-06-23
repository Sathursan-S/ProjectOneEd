import axios from "axios";

const API = axios.create({
  baseURL:
    "https://34d4-2402-d000-a400-7da1-dc5e-ba72-fd96-feaa.ngrok-free.app",
});

export const createClassSpace = (classSpaceData) =>
  API.post("/api/v1/class/createClassSpace", classSpaceData);

export const getClassSpaces = () => API.get("/api/v1/class/classspaces");
