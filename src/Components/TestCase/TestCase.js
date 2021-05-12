import React from 'react';
import TestStep from "../TestSteps/TestStep";
import './TestCase.css'
import {Link, NavLink} from "react-router-dom";
import parseData from "../Helpers/Helper";

export default class TestCase extends React.Component{

    item = this.props.item;



    render() {
        let date = parseData(this.item.createDate)


        let testCasesRes = [];
        this.item.steps.forEach((item) => {
            testCasesRes.push(<TestStep item={item} key={testCasesRes.length} number={testCasesRes.length}/>)
        })

        return(
            <div className='testCase'>
                <div className='testCase_header'>
                    <span className='testCase_title'>{this.item.name}</span>
                    <span className='testCase_date'>{date}</span>
                    <NavLink to={'/testcase/'+this.item.id} className={'btn btn-success'}>Run</NavLink>
                </div>

                <div className='testCase_description'>
                    {this.item.description}
                </div>

                <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                        data-bs-target={"#collapseExample"+ this.item.id} aria-expanded="false" aria-controls={"collapseExample"+ this.item.id}>
                    ▼
                </button>

                <div className='testCase_steps collapse' id={"collapseExample"+ this.item.id}>
                    {testCasesRes}
                </div>

            </div>
        )
    }
}