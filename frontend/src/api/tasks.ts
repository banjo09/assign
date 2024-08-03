import axios from 'axios';

const API_URL = 'http://localhost:5050/api/tasks';

export const fetchTasks = () => axios.get(API_URL);
export const addTask = (title: string) => axios.post(API_URL, { title });
export const updateTaskStatus = (id: string, completed: boolean) => axios.patch(`${API_URL}/${id}`, { completed });