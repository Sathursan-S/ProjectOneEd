import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.8.197:8081",
});

export const createClass = (classData) =>
  API.post("/api/class/create", classData);
