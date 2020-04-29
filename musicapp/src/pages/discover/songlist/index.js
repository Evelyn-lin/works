import React from 'react'
import { Carousel, Tabs, Select, Menu } from 'antd';
import CardList from '../../../conponents/CardList';

const {Option} = Select;

export default class SongList extends React.Component {
    render() {
        const cardList1 = {
            title: '推荐歌单',
            width: '20%',
            imgList: [
              {
                key: '1',
                src: 'http://p1.music.126.net/qNnAl8kyJ7i6SDr3M6nxcw==/109951164923002751.jpg?param=140y140',
                description: '歌里藏着小宇宙：星河在你耳中流动'
              }, {
                key: '2',
                src: 'http://p1.music.126.net/9O2u-wy4ZXUjVPIrUhezDA==/109951164931295462.jpg?param=140y140',
                description: '✧星河漫游 梦里有你✦ | 硬地新歌vol.10'
              }, {
                key: '3',
                src: 'http://p1.music.126.net/a2b-wcVrNbB1Ktum8q-uyw==/7870304232586557.jpg?param=140y1400',
                description: '【戏腔专题】伶人入画，一生天涯'
              }, {
                key: '4',
                src: 'http://p1.music.126.net/xBr4_b43p33N2vxbpg2nMw==/109951164770404940.jpg?param=140y140',
                description: '《真心对待对你好的人》'
              },
              {
                key: '5',
                src: 'http://p1.music.126.net/bNybRPvWGgEuR8csL8-BqA==/109951164767005215.jpg?param=140y140',
                description: '如果你越来越沉默，越来越不想说'
              },
            ]
          }
        return (
            <div className="song_list" >
                <Select defaultValue="全部歌单" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
                <Menu mode="horizontal">
                    <Menu.Item>热门标签</Menu.Item>
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
                <CardList cardList={cardList1} />
                <CardList cardList={cardList1} />
                <CardList cardList={cardList1} />
            </div>
        )
    }
}