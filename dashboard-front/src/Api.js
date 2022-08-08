import axios from 'axios';


const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: false,
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization:`Bearer ${localStorage.getItem('jwt')}` },
    //auth: { username: 'barflatoco', password: 'barflatoco' }
    
})

export default {

    getUsers() {
        return API.get("/users")
    },
}