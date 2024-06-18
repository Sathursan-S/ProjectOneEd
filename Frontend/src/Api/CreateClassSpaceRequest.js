import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.8.197:8081",
});

export const createClassSpace = (classSpaceData) =>
  API.post("/api/classSpace/create", classSpaceData);

// Path: Frontend/src/Actions/CreateClassSpaceAction.js
