import React from 'react';
import { LeftOutlined, RightOutlined, MailOutlined, CloseOutlined, BorderOutlined, SkinOutlined, SettingOutlined, ShareAltOutlined, MinusOutlined } from '@ant-design/icons'
import { Input, Row, Col, Button } from 'antd'
import './index.less'
import { searchSong } from '../../redux/action'
import { connect } from 'react-redux'

const { Search } = Input;
class Header extends React.Component {

  handleSearch = (value) => {
    let {dispatch} = this.props;
    dispatch(searchSong(value));
  }
  render() {
    return (
      <Row className="header">
        <Col span={4} className="header_left">
          <img className="logo" src="./img/logo.jpg" alt="网易云" />
          <span >网易云音乐</span>
        </Col>
        <Col span={13} className="search">
          <Button ghost icon={<LeftOutlined />} size="small" />
          <Button ghost icon={<RightOutlined />} size="small" />
          <Search
            placeholder="搜索音乐，视频，歌词，电台"
            style={{ marginLeft: 30, width: 400 }}
            onSearch={value => this.handleSearch(value)}
          />
        </Col>
        <Col span={7} className="header_right">
          <ul>
            <li>慕沐丫</li>
            <li>开通VIP</li>
            <li><SkinOutlined style={{ fontSize: 16 }} /></li>
            <li><MailOutlined style={{ fontSize: 16 }} /></li>
            <li><SettingOutlined style={{ fontSize: 16 }} /></li>
            <li className="line">|</li>
            <li><ShareAltOutlined style={{ fontSize: 16 }} /></li>
            <li><MinusOutlined style={{ fontSize: 16 }} /></li>
            <li><BorderOutlined style={{ fontSize: 16 }} /></li>
            <li><CloseOutlined style={{ fontSize: 16 }} /></li>
          </ul>
        </Col>
      </Row>
    )
  }
}

export default connect()(Header)