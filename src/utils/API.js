import axios from "axios";

const apiServer = axios.create({
    baseURL: "http://192.168.0.20:8080/api"
});

export default apiServer;