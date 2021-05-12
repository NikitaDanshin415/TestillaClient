import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Auth from "../Auth";
import Header from "../Header";
import HomeView from "../Home/homeView";
import TestCaseAddForm from "../TestCaseAddForm/TestCaseAddForm";
import TestPlan from "../TestPlan";
import TestCase from "../TestCase";
import TestCaseRun from "../TestCaseRun";


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
                    <Route path='/'  component={HomeView} exact/>
                    <Route path='/addTestCase' component={TestCaseAddForm}/>
                    <Route path='/testPlan' component={TestPlan}/>
                    <Route path='/testCase/:id' render={({match, location, history})=> {
                       return <TestCaseRun id={match.params.id}/>}
                    }/>
                </Router>
            </div>
           )
    }
}