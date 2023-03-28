import axios from 'axios';

export default axios.create({
    baseURL: 'https://qr-code-generation-api-7gq8.vercel.app/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});