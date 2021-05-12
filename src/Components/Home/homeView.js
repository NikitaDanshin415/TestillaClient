import React from 'react';
import {Link, NavLink, Route} from "react-router-dom";
import './Home.css'
import TestCase from "../TestCase";
import ApiService from "../../Services";
export default class HomeView extends React.Component{
    services = new ApiService();

    state ={
        testCases: [],
    }

    componentDidMount() {
        this.services.getTestCases().then( async (res)=>{
            this.setState({
                testCases:res,
            })
        })
    }

    render() {

        let testCases = [];
        let counter = 0;
        this.state.testCases.forEach((item)=>{
            testCases.push(<TestCase item={item} key={counter++}/>)
        })


        return(
            <div className='home'>
                <NavLink to='/addTestCase' className='btn btn-primary m-l-20'>Добавить</NavLink>
                {testCases}
            </div>
        )
    }
}