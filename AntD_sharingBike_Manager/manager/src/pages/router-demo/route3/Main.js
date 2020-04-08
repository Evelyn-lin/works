import React from 'react'
import {Link} from 'react-router-dom'

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <Link to="/main/test-id">嵌套路由1</Link>
                <br></br>
                <Link to="/main/456">嵌套路由2</Link>
                {this.props.children}
            </div>
        )
    }
}