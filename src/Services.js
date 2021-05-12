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


    createTestSteps = async (id, data) =>{

        let testStepsData = [];
        for(let i = 0; i < data.testStepCounter; i++){
            testStepsData.push({
                "Action": data[i].action,
                "Reaction": data[i].reaction,
                "TestCaseId": id,
            })
        }

        console.log('createTestSteps')
        await fetch(`${this.baseUrl}/teststep/array`, {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection':'keep-alive',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            },
            body: JSON.stringify(testStepsData)
        })
    }

    addTestCase = async (data) =>{

        const testCaseData = {
            "Name": data.testCaseName,
            "Description": data.testCaseDescription,
            "AuthorId": 1,
        }


        const res = await fetch(`${this.baseUrl}/testcase`, {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection':'keep-alive',
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            },
            body: JSON.stringify(testCaseData)
        }).then(
            resp => resp.json()
        )
        return res;

    }
}