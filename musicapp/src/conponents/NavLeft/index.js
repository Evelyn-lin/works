import React from 'react'
import menuConfig from './../../menuConfig'
import { Menu } from 'antd'
import './index.less'
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {

  state = {

  }

  componentDidMount() {
    let menuList = this.renderMenuList(menuConfig);
    this.setState({
      menuList
    })
  }

  renderMenuList = (menuConfig) => {
    return menuConfig.map(item => {
      if (item.group) {
        return <Menu.ItemGroup key={item.key} title={item.title} >
          {this.renderMenuList(item.group)}
        </Menu.ItemGroup>
      }
      if (item.children) {
        return <SubMenu key={item.key} title={item.title}>
          {this.renderMenuList(item.children)}
        </SubMenu>
      }
      return <Menu.Item key={item.key} style={{fontSize:12,height:30}}>
        {item.title}
      </Menu.Item>
    })
  }
  render() {
    return (
      <div className="nav_left">
        <Menu >
          {this.props.children}
          {this.state.menuList}
        </Menu>
      </div>
    )
  }
}