import axios from "axios";

const Server = axios.create({
    baseURL: "http://172.28.16.237:9090/api"    
});

export default Server;