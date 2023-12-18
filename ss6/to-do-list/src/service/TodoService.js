// src/services/todoService.js
import axios from 'axios';

const apiUrl = 'http://localhost:8080/lists';

export const findAll = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error find all:', error);
        throw error;
    }
};

export const submitTask = async (newTask) => {
    if (newTask.trim() === '') {
        throw new Error('Please enter a todo task.');
    }

    try {
        await axios.post(apiUrl, {
            title: newTask,
            completed: false,
        });
    } catch (error) {
        console.error('Error adding todo task:', error);
        throw error;
    }
};
