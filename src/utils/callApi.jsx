import axios from 'axios';

export async function callTcgAPI(endpoint, method = 'get', data) {
    try{
        const configToken = {
            method,
            url: `https://tcg.world/api/v1/${endpoint}`,
            headers: sessionStorage.getItem('token') ? {                
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }:{},
            data
        }
        const res = await axios(configToken);
        return res.data;
    } catch(e) {
        console.log(e);
    } 
}
