import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from "react-router-dom";
import Auth from "../Auth";
import Home from "../Home";
import ApiService from "../../Services";
import Header from "../Header";
import TestCase from "../TestCase";
import TestStep from "../TestSteps/TestStep";
import HomeView from "../Home/homeView";
import TestCaseAddForm from "../TestCaseAddForm/TestCaseAddForm";
import TestPlan from "../TestPlan";


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

                <Router>
                    <Header path='/' user = {this.state.user} logout={this.logout}/>
                    <Route path='/' component={HomeView} exact/>
                    <Route path='/addTestCase' component={TestCaseAddForm}/>
                    <Route path='/testplan' component={TestPlan}/>
                </Router>
            </div>
           )
    }
}