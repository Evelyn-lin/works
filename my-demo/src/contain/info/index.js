import React from 'react'
import './index.less'

export default class Info extends React.Component {

    render() {
        return (
            <ul class="tooltip">
                <li>向上提示文本<span class="tooltiptext-top">向上提示文本</span></li>
                <li>向下提示文本<span class="tooltiptext-bottom">向下提示文本</span></li>
                <li>向左提示文本<span class="tooltiptext-left">向左提示文本</span></li>
                <li>向右提示文本<span class="tooltiptext-right">向右提示文本</span></li>
            </ul>
        )
    }
}