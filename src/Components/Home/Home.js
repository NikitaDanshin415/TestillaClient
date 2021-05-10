import React from 'react';
import ApiService from "../../Services";
import HomeView from "./homeView";
import Header from "../Header";


export default class Home extends React.Component{
    service = new ApiService();
    state = {
        user: null
    }

    componentDidMount() {
        this.service.getUserInfo().then((res) => {
            this.setState({
                user: res
            })
        })
    }

    render() {

        const {user} = this.state;
        if(user === null){
            return <div/>
        }

        return (
            <div>
                <Header
                    logout = {this.props.logout}
                    user = {this.state.user}
                />

                <HomeView
                    user = {this.state.user}
                />

            </div>
        )



    }
}

