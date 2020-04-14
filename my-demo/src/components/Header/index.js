import React from 'react'
import { Menu } from 'antd'
import menuConfig from './../../config/menuConfig'

export default class Header extends React.Component {
    state = {

    }

    componentDidMount() {
        let currentKey = window.location.hash.replace('#', '');
        this.setState({ currentKey })
    }

    handleClick = (item) => {
        window.location.hash = '#' + item.key;
        this.setState({
            currentKey: item.key
        })
    }
    render() {
        return (
            <div className="header">
                <Menu
                    mode="horizontal"
                    selectedKeys={this.state.currentKey}
                    onClick={
                        (item) => this.handleClick(item)
                    }
                >
                    {
                        menuConfig.map(item =>
                            <Menu.Item
                                key={item.key}
                            >{item.title}</Menu.Item>
                        )
                    }
                </Menu>
            </div>
        )
    }
}