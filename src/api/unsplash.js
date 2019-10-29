import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 47a4b730e58fec842416c0b281a1cbf4fb8900be227bde321dd13b36fdf1e6d6'
     }
});