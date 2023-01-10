import axios from 'axios';

export const back_call = axios.create({
	baseURL: 'http://localhost:3001/api/v1',
});
//https://back-deploy-tech-production.up.railway.app/api/v1
