import React from 'react';
import TestStep from "../TestSteps/TestStep";
import TestStepAddField from "../TestStepAddField";
import ApiService from "../../Services";
import {Redirect, History} from 'react-router-dom';


export default class TestCaseAddForm extends React.Component{

    state = {
        testCaseName:'',
        testCaseDescription:'',
        testStepCounter:1,
        testSteps:{
            0:{
                action:'',
                reaction: '',
            },
        }
    }

    service = new ApiService();

    addTestStep = (e) =>{
        e.preventDefault();

        let steps = this.state.testSteps;

        steps[this.state.testStepCounter] = {
            action: '',
            reaction: '',
        }

        this.setState({
            testStepCounter: this.state.testStepCounter + 1,
            testSteps: steps,
        });
    }

    fillTestStep = async (id, action, reaction) =>{
        this.setState(state => {
            state.testSteps[id] = {
                action,
                reaction
            }
            return state
        })
      }


    printState = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    checkInputName = (e) =>{
        this.setState({
            testCaseName: e.target.value
        })
    }

    checkInputDescription = (e) =>{
        this.setState({
            testCaseDescription: e.target.value
        })
    }

    addTestCase = async (e) =>{
        e.preventDefault();
        let id = await this.service.addTestCase(this.state);
        await this.service.createTestSteps(id.id, this.state.testSteps);

        this.props.history.push('/');
    }

    render() {
        const testSteps = [];

        for (let i = 0; i < this.state.testStepCounter; i += 1) {
            testSteps.push(<TestStepAddField key={i-1} number={i} fillTestStep={this.fillTestStep}/>);
        }

        return(
            <div className='testCase'>
                <h2>Добавление сценария тестирования</h2>
                <form>

                    <div className="form-group addTestCase_About m-t-10">
                        <label htmlFor="exampleFormControlInput1">Название</label>
                        <input type="text" className="form-control" name='testCaseName' onChange={this.checkInputName}/>
                    </div>

                    <div className="form-group addTestCase_About m-t-10">
                        <label htmlFor="exampleFormControlInput1">Описание сценария тестирования</label>
                        <textarea className="form-control" name="testCaseDescription" rows="3" onChange={this.checkInputDescription}/>
                    </div>
                    {
                        testSteps
                    }
                    <button className='btn btn-primary m-t-10 m-r-10 ' onClick={this.addTestStep}>Добавить шаг</button>
                    <button className='btn btn-primary m-t-10 m-r-10 ' onClick={this.addTestCase}>Сохранить</button>
                    <button className='btn btn-primary m-t-10 m-r-10 ' onClick={this.printState}>state</button>
                </form>

            </div>
        )
    }
}