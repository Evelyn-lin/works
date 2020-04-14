import React from 'react';
import { Menu } from 'antd';
import menuList from '../../config/menuConfig';
import { NavLink } from 'react-router-dom';
import './index.less'

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
    state = {

    }

    componentWillMount() {
        let menuTreeNode = this.renderMenu(menuList);
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
        this.setState({
            menuTreeNode,
            currentKey
        })
    }

    renderMenu = (data) => {
        return data.map(item => {
            if (item.children) {
                return <SubMenu title={item.title} key={item.key}>
                    {this.renderMenu(item.children)}
                </SubMenu>
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}> {item.title}</NavLink>
            </Menu.Item>
        })
    }

    handleClick = (e) => {
        this.setState({
            currentKey: e.key
        })
    }
    render() {
        return (
            <div >
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Bike-sharing</h1>
                </div>
                <Menu
                    theme="dark"
                    selectedKeys={this.state.currentKey}
                    onClick={this.handleClick}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}