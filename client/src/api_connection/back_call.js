import axios from 'axios';

export const back_call = axios.create({
	baseURL: 'https://techworld-production.up.railway.app/api/v1/',
});
