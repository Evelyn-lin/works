import React from 'react'
import { Select, Menu } from 'antd';
import CardList from '../../../conponents/CardList';
import axios from '../../axios'

const { Option } = Select;

export default class SongList extends React.Component {

  state = {
    playList: []
  }

  componentWillMount() {
    this.requestList();
  }

  handleClick=(item)=>{
    this.requestList(item.item.props.children);
    
    
  }

  requestList = (cat='全部') => {
    axios.ajax({
      url: '/top/playlist/highquality',
      params: {
        limit: 20,
        cat
      }
    }).then(res => {
      this.setState({ playList: res.playlists });
    })
  }

  render() {
    const{playList} = this.state;
    const cardList1 = {
      title: '推荐歌单',
      width: '150px',
      imgList:playList
    }
    return (
      <div className="song_list" >
        <Select defaultValue="全部歌单" style={{ width: 120 }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Menu
        selectedKeys='item_0'
         mode="horizontal"
         onClick={item=>{this.handleClick(item)}}
         >
          <Menu.Item>全部</Menu.Item>
          <Menu.Item>华语</Menu.Item>
          <Menu.Item>流行</Menu.Item>
          <Menu.Item>民谣</Menu.Item>
          <Menu.Item>摇滚</Menu.Item>
          <Menu.Item>电子</Menu.Item>
          <Menu.Item>另类</Menu.Item>
          <Menu.Item>轻音乐</Menu.Item>
          <Menu.Item>影视原声</Menu.Item>
          <Menu.Item>ACG</Menu.Item>
        </Menu>
        <CardList cardList={cardList1} />
        
      </div>
    )
  }
}