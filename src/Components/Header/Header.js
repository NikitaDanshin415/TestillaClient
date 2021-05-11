import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

export default class Header extends React.Component{



    render() {


        return(
            <header>
                <div className='topHeader'>
                    <div>
                        <div className='logo'>Система управления сценариями тестирования</div>

                    </div>
                    <div className='userInfo'>
                        <ul>
                            {/*<li>{this.props.user.Name}</li>*/}
                            {/*<li>{this.props.user.Email}</li>*/}
                            {/*<li>{this.props.user.Role.Name}</li>*/}

                        </ul>
                        <button className='btn btn-primary exit-btn' onClick={this.props.logout}>Exit</button>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item nav-link">
                                    <Link to='/'>Сценарии тестирования</Link>
                                </li>
                                <li className="nav-item nav-link">
                                    <Link to='/testplan'>Планы тестирования</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}