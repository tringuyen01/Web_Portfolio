import axios from "axios";

const post = async (req, data)=> {
    const result = await axios.post(req, data);
    return result;
}

export default post;
