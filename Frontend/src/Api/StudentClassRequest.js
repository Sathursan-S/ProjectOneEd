import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.8.197:8080/",
});

export const classRequest = (id, userId) =>
  API.put(`classes/request`, { classId: id, userId: userId });

export const getExploreClasses = () => API.get(`/classes/explore`);
