import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-server1.herokuapp.com/",
});

export default instance;
