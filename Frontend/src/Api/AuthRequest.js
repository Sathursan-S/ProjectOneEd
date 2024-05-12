import axios from 'axios'

const API = axios.create({baseURL:"http://192.168.43.222:8081"})

export const logIn = (formData)=> API.post('api/v1/auth/authenticate', formData)
export const signUp = (formData)=> API.post('/api/v1/auth/register', formData)