import React from 'react'
import './TestStepAddForm.css'

export default class TestStepAddField extends React.Component{

    state ={
        action:'',
        reaction:''
    }

    fillTestStep = this.props.fillTestStep;


    inputAction = async(e) =>{
        await this.setState({
           action: e.target.value
        });

        this.fillTestStep(this.props.number, this.state.action, this.state.reaction)
    }

    inputReaction = async(e) =>{
        await this.setState({
            reaction: e.target.value
        });

        this.fillTestStep(this.props.number, this.state.action, this.state.reaction)
    }



    render() {
        return (
            <div className='addTestStep m-t-10' key={this.props.number}>
                <span>{'Шаг № ' + +(this.props.number + 1)}</span>
                <div className="form-group addTestCase_About m-t-10">
                    <label>Действие</label>
                    <textarea className="form-control"   name="testStepAction" rows="3" onChange={this.inputAction}/>
                </div>
                <div className="form-group addTestCase_About m-t-10">
                    <label>Реакция системы</label>
                    <textarea className="form-control"   name="testStepReaction" rows="3" onChange={this.inputReaction}/>
                </div>
            </div>
        );
    }
}