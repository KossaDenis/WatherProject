import axios from 'axios'

/**
 * * Ссылка на api
 */
const API_URL = 'http://localhost:4000/api';

/**
 * * Объект api
 */
const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

export default $api;