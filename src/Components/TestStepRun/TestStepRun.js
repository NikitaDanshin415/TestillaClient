import React from 'react';

export default class TestStepRun extends React.Component{
    fillTestStepResult = this.props.fillTestStepResult;

    selectField = (e) =>{
        e.preventDefault();

        this.fillTestStepResult(this.props.id, e.target.value)
        console.log(this.props.id + " -  " + e.target.value)

    }

    render() {
        return(
            <div className='testStep' id={this.props.id}>
                <span className='testStep_number'>Step #{this.props.number +1 }</span>
                <div className='testStep_elements'>
                    <div className='testStep_field testStep_field_run'>
                        <span>Action</span>
                        <div>{this.props.item.action}</div>
                    </div>
                    <div className='testStep_field testStep_field_run'>
                        <span>Reaction</span>
                        <div>{this.props.item.reaction}</div>
                    </div>
                    <div className='testStep_result testStep_result_run'>
                        <span>Result</span>
                        <select className="form-select" aria-label="Default select example" onChange={this.selectField}>
                            <option value="positive">Положительный</option>
                            <option value="negative">Отрицательный</option>
                            <option value="bloked">Блокирован</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
