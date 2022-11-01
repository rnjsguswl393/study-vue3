import axios from 'axios';

function create(baseURL, options) {
    const instance = axios.create({
        baseURL: baseURL,
        ...options,
        // timeout: options.timeout || 1000,
        // headers: options.headers || { 'X-Custom-Header': 'foobar' },
    });

    return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts`);
