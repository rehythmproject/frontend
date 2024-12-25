import axios from "axios";

const Server = axios.create({
    baseURL: "http://192.168.200.176:9090/api"
    
});

export default Server;