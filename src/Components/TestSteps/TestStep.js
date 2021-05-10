import React from 'react';
import './TestStep.css'

export default class TestStep extends React.Component{
    render() {
        return(
            <div className='testStep'>
                <span className='testStep_number'>Step #1</span>
                <div className='testStep_elements'>
                    <div>
                        <span>Action</span>
                        <div>sdfgsdfg</div>
                    </div>
                    <div>
                        <span>Reaction</span>
                        <div>sdfgsdfg</div>
                    </div>
                </div>

            </div>

        )
    }
}