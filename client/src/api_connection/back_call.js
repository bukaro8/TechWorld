import axios from "axios"

export const back_call = axios.create({
    baseURL: "https://back-deploy-tech-production.up.railway.app",

})
