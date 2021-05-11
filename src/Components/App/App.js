import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from "react-router-dom";
import Auth from "../Auth";
import Home from "../Home";
import ApiService from "../../Services";
import Header from "../Header";
import TestCase from "../TestCase";
import TestStep from "../TestSteps/TestStep";
import HomeView from "../Home/homeView";


export default class App extends React.Component{

    state = {
        isLogin : false,
        user: null,
    }

    login = (user) =>{
        this.setState({
            isLogin:true,
            user: user,
        })
    }

    logout = () =>{
        localStorage.removeItem('token')
        this.setState({
            isLogin:false,
            user: null,
        })
    }

    render() {

        if(localStorage.getItem('token') === null){
            return <Auth login={this.login}/>
        }

        return(
            <div>
               <Header user = {this.state.user} logout={this.logout}/>
                <Router>
                    <Route path='/' component={HomeView} exact/>
                    <Route path='/df' component={TestStep}/>
                </Router>
            </div>
           )
    }
}