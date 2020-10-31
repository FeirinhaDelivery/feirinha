import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app.ecwid.com/api/v3/28820124/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    params: {
        token: 'public_XkKYF7H7cqsZ5Jd3c5AF9WNVc5fUceeG'
    },
})

export default api