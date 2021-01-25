import axios from "axios";

export default axios.create({
    baseURL: "http://54.198.70.176:5000",
    headers: {
        "Content-type" : "application/json",
    },
});