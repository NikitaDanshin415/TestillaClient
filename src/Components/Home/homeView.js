import React from 'react';
import {Link, Route} from "react-router-dom";
import './Home.css'
import TestCase from "../TestCase";
export default class HomeView extends React.Component{

    render() {
        return(
            <div className='home'>
                <TestCase/>
                <TestCase/>
            </div>


        )
    }
}