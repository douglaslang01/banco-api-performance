import http from 'k6/http';
import { getBaseUrl } from '../utils/variaveis.js';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export function getToken() {
    const url = getBaseUrl() + '/login';

    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = http.post(url, payload, params);

    return response.json('token');
}