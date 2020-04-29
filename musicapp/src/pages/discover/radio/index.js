import React from 'react'
import { Carousel, Tabs, Select, Radio } from 'antd';
import CardList from '../../../conponents/CardList';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import './index.less'

const { Option } = Select;
const { TabPane } = Tabs;

export default class SongRadio extends React.Component {
  render() {
    const cardList1 = {
      title: '听听',
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
    const tabList = [
      {
        icon:<img src="./img/rank.svg"/>,
        title: '排行榜'
      }, {
        icon:<img src="./img/earphone.svg"/>,
        title: '创作/翻唱'
      }, {
        icon:<img src="./img/kalaok.svg"/>,
        title: '3D/电子'
      }, {
        icon:<img src="./img/laugh.svg"/>,
        title: '情感调频'
      }, {
        icon:<img src="./img/sing.svg"/>,

        title: '音乐故事'
      }, {
        icon:<img src="./img/catoon.svg"/>,
        title: '二次元'
      }, {
        icon:<img src="./img/book.svg"/>,
        title: '有声书'
      }, {
        icon:<img src="./img/learn.svg"/>,
        title: '知识技能'
      }, {
        icon:<img src="./img/business.svg"/>,
        title: '商业财经'
      }, {
        icon:<img src="./img/earth.svg"/>,
        title: '科技科学'
      }, {
        icon:<img src="./img/teach.svg"/>,
        title: '校园教育'
      }, {
        icon:<img src="./img/plane.svg"/>,
        title: '旅途城市'
      }, {
        icon:<img src="./img/help.svg"/>,
        title: '我要做主播'
      }
    ]
    return (
      <div className="song_radio" >
        <Carousel autoplay>
          <div>
            <img src="http://p1.music.126.net/mpsE4xVZoKH3AZc_D0cOlw==/109951164944030659.jpg?imageView&quality=89" />
          </div>
          <div>
            <img src="http://p1.music.126.net/fH5jn3t_v-0UMQVDPpXocA==/109951164945827613.jpg?imageView&quality=89" />
          </div>
          <div>
            <img src="http://p1.music.126.net/fX2vOzcxvOMAo5Ne06wgHw==/109951164944069150.jpg?imageView&quality=89" />
          </div>
          <div>
            <img src="http://p1.music.126.net/KNlq2Q3yMtYtr-G8Wkny7g==/109951164944041402.jpg?imageView&quality=89" />
          </div>
        </Carousel>
        <Tabs defaultActiveKey="1" >
          {tabList.map((item, index) => (
            <TabPane tab={<span>{item.icon}<br/>{item.title}</span>} key={index}>
                      <CardList cardList={cardList1} />
                      <CardList cardList={cardList1} />
                      <CardList cardList={cardList1} />
            </TabPane>
          ))}
        </Tabs>
      </div>
    )
  }
}