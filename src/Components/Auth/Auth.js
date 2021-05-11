import React from 'react';
import "./CSS/Auth.css"
import "./CSS/utils.css"
import test from "./Images/bg-01.jpg"
import ApiService from "../../Services";

export default class Auth extends React.Component{

    service = new ApiService();
    login = this.props.login;

    state = {
        email : "",
        password : "",
    }

    sendAuthRequest = async (e) => {
        e.preventDefault();
        let token = this.service.getAuthToken(this.state.email, this.state.password);

        token.then((res) => {

            if('access_token' in res){
               localStorage.setItem('token', res.access_token)
               this.service.getUserInfo().then((res) => {
                   this.login(res);
               })
           }

        })
    }


    checkInputField (e){
        let inputDiv = e.target.parentNode;
        let input = inputDiv.querySelector('.input100');

        if(input.value !== ""){
            input.classList.add('has-val');
        }else{
            input.classList.remove('has-val');
        }
    }

    changeEmail =(e)=> {

        this.checkInputField(e);
        this.setState((state) => {
            return {
                email: e.target.value
            }
        });
    }

    changePassword = (e) =>{
        this.checkInputField(e);
        this.setState({password: e.target.value});
    }


    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form">
                        <span className="login100-form-title p-b-43">
                            Login to continue
                        </span>

                            <div className="wrap-input100">
                                <input className="input100" type="text" name="email" onChange={this.changeEmail}/>
                                <span className="focus-input100"/>
                                <span className="label-input100">Email</span>
                            </div>

                            <div className="wrap-input100">
                                <input className="input100" type="password" name="pass" required
                                       onChange={this.changePassword}/>
                                <span className="focus-input100"></span>
                                <span className="label-input100">Password</span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={this.sendAuthRequest}>
                                    Login
                                </button>
                            </div>
                        </form>

                        <div className="login100-more" style={{backgroundImage: "url(" + test + ")"}}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}