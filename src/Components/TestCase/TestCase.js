import React from 'react';
import TestStep from "../TestSteps/TestStep";
import './TestCase.css'

export default class TestCase extends React.Component{
    render() {
        return(
            <div className='testCase'>
                <div className='testCase_header'>
                    <span className='testCase_title'>TestCase</span>
                    <span className='testCase_date'>10.05.2021</span>
                </div>

                <div className='testCase_description'>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                    Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
                    Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в
                    более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                </div>

                <div className='testCase_steps'>
                    <TestStep/>
                    <TestStep/>
                </div>
            </div>

        )
    }
}