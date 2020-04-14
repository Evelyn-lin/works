import React from 'react'
import {Link} from 'react-router-dom'

export default class Main extends React.Component {

    render() {
        return (
            <div>main
                <Link to="/main/a">点我</Link>
                {this.props.children}
            </div>
        )
    }
}