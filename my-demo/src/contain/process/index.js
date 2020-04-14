import React from 'react'
import './index.less'

export default class Process extends React.Component {

    render() {
        return (
            <ul id="skill">
                <li><h3>HTML/CSS</h3><span className="html-css"></span></li>
                <li><h3>javascript</h3><span className="javascript"></span></li>
                <li><h3>React</h3><span className="react"></span></li>
                <li><h3>Vue</h3><span className="vue"></span></li>
            </ul>
        )
    }
}