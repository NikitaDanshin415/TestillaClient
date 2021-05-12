import React from 'react';
import './Header.css'
import {Link, NavLink} from "react-router-dom";
import ApiService from "../../Services";

export default class Header extends React.Component{

    state ={
        user: {
            Name: "",
            Email: "",
            Role:{
                Name:""
            }
        }
    }

    service = new ApiService();

    async componentDidMount() {

    }

    render() {

        // this.service.getUserInfo().then((res) => {
        //     this.setState({
        //         user: res
        //     })
        // })
        let {user} = this.state

        return(
            <header>
                <div className='topHeader'>
                    <div>
                        <div className='logo'>Система управления сценариями тестирования</div>

                    </div>
                    <div className='userInfo'>
                        <ul>
                            <li>{user.Name}</li>
                            <li>{user.Email}</li>
                            <li>{user.Role.Name}</li>
                        </ul>
                        <button className='btn btn-primary exit-btn' onClick={this.props.logout}>Exit</button>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item nav-link">
                                    <NavLink to='/' className="btn" activeClassName='btn btn-primary' exact>Сценарии тестирования</NavLink>
                                </li>
                                <li className="nav-item nav-link">
                                    <NavLink to='/testplan' className="btn" activeClassName='btn btn-primary' >Планы тестирования</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}