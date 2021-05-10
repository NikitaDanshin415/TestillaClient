export default class ApiService{
    baseUrl = 'https://localhost:44361/api';

    getAuthToken = async (email, password) =>{
        let data = {
            'email': email,
            'password': password
        }

        const res = await fetch(`${this.baseUrl}/auth/login`, {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection':'keep-alive'
            },
            body: JSON.stringify(data)
        });

        return await res.json();
    }

    getUserInfo = async () =>{

        const res = await fetch(`${this.baseUrl}/user/getUserInfo`, {
            method: 'GET',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection':'keep-alive',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            },
        });

        return await res.json();

    }
}