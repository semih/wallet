import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIn0.9h0uUOtEhbcdYF7rPJi2p0lqfdbwCTq69a7HahTBmqw";

const HttpRequestUtil = axios.create({
    baseURL: "http://localhost:9899",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
});

export default HttpRequestUtil