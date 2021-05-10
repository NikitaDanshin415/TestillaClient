import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Auth from "../Auth";
import Home from "../Home";
import ApiService from "../../Services";
import Header from "../Header";


export default class App extends React.Component{

    state = {
        isLogin : false
    }

    login = () =>{
        this.setState({
            isLogin:true
        })
    }

    logout = () =>{
        localStorage.removeItem('token')
        this.setState({
            isLogin:false
        })
    }

    render() {


        return(

            <Router>
                <Route path="/" render={
                    () => {
                        if(localStorage.getItem('token')){
                            return (<div>
                                <Home logout={this.logout}/>
                            </div>)

                        }
                        return <Auth login={this.login} exact/>
                    }
                } exact/>


            </Router>

        )
    }
}