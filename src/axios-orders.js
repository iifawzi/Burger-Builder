import axios from "axios";


const instance = axios.create({
    baseURL : 'https://reactt-my-burger.firebaseio.com/'
})


export default instance;