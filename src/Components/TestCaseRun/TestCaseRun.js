import React from 'react'
import {NavLink} from "react-router-dom";
import ApiService from "../../Services";
import TestStep from "../TestSteps/TestStep";
import parseData from "../Helpers/Helper";
import TestStepRun from "../TestStepRun/TestStepRun";

export default class TestCaseRun extends React.Component{

    service = new ApiService();
    id = this.props.id;

    state = {
        testCase:{},
        comment:'',
        testCaseResults:{},
    }

    componentDidMount() {
        this.service.getTestCase(this.id).then((res)=>{
            this.setState({
                testCase:res,
            })
        })
    }

    fillDescription = async (e) =>{
        await this.setState({
            comment: e.target.value,
        })
    }

    fillTestStepResult = async (id, result) =>{
        this.setState(state => {
            state.testCaseResults[id] = {
                result
            }
            return state
        })
    }

    render() {

        let date = parseData(this.state.testCase.createDate)
        let testCasesRes = [];

        if(this.state.testCase.steps !== undefined){
            this.state.testCase.steps.forEach((item) => {
                testCasesRes.push(<TestStepRun item={item} key={testCasesRes.length} number={testCasesRes.length} id={item.id} fillTestStepResult={this.fillTestStepResult}/>)
            })
        }

        return(
            <div className='testCase'>
                <div className='testCase_header'>
                    <span className='testCase_title'>{this.state.testCase.name}</span>
                    <span className='testCase_date'>{date}</span>
                </div>

                <div className='testCase_description'>
                    {this.state.testCase.description}
                </div>

                <div className='testCase_steps'>
                    {testCasesRes}
                </div>

                <div className={'testCase_result'}>
                    <label className='m-t-10'>Результат</label>
                    <textarea className="form-control m-b-10" name="testStepAction" rows="3" onChange={this.fillDescription}/>
                    <button className={'btn btn-primary'}>Сохранить</button>
                </div>

            </div>
        )
    }
}