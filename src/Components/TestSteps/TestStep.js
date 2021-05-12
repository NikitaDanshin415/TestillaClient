import React from 'react';
import './TestStep.css'

export default class TestStep extends React.Component{
    render() {

        return(
            <div className='testStep'>
                <span className='testStep_number'>Step #{this.props.number +1 }</span>
                <div className='testStep_elements'>
                    <div className='testStep_field'>
                        <span>Action</span>
                        <div>{this.props.item.action}</div>
                    </div>
                    <div className='testStep_field'>
                        <span>Reaction</span>
                        <div>{this.props.item.reaction}</div>
                    </div>
                </div>

            </div>

        )
    }
}