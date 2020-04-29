import React from 'react'
import { Carousel, Tabs } from 'antd';
import CardList from '../../../conponents/CardList';
import axios from '../../axios'
import './index.less'

const { TabPane } = Tabs;

export default class SongRadio extends React.Component {
  state = {
    playList: []
  }

  componentWillMount() {
    this.requestList();
  }

  requestList = (cat = '全部') => {
    axios.ajax({
      url: '/top/playlist/highquality',
      params: {
        limit: 10,
        cat
      }
    }).then(res => {
      this.setState({ playList: res.playlists });
    })
  }

  render() {
    const { playList } = this.state;
    const cardList1 = {
      title: '推荐歌单',
      width: '150px',
      imgList: playList
    }
    const tabList = [
      {
        icon: <img alt="img" src="./img/rank.svg" />,
        title: '排行榜'
      }, {
        icon: <img alt="img" src="./img/earphone.svg" />,
        title: '创作/翻唱'
      }, {
        icon: <img alt="img" src="./img/kalaok.svg" />,
        title: '3D/电子'
      }, {
        icon: <img alt="img" src="./img/laugh.svg" />,
        title: '情感调频'
      }, {
        icon: <img alt="img" src="./img/sing.svg" />,

        title: '音乐故事'
      }, {
        icon: <img alt="img" src="./img/catoon.svg" />,
        title: '二次元'
      }, {
        icon: <img alt="img" src="./img/book.svg" />,
        title: '有声书'
      }, {
        icon: <img alt="img" src="./img/learn.svg" />,
        title: '知识技能'
      }, {
        icon: <img alt="img" src="./img/business.svg" />,
        title: '商业财经'
      }, {
        icon: <img alt="img" src="./img/earth.svg" />,
        title: '科技科学'
      }, {
        icon: <img alt="img" src="./img/teach.svg" />,
        title: '校园教育'
      }, {
        icon: <img alt="img" src="./img/plane.svg" />,
        title: '旅途城市'
      }, {
        icon: <img alt="img" src="./img/help.svg" />,
        title: '我要做主播'
      }
    ]
    return (
      <div className="song_radio" >
        <Carousel autoplay>
          <div>
            <img alt="img" src="http://p1.music.126.net/mpsE4xVZoKH3AZc_D0cOlw==/109951164944030659.jpg?imageView&quality=89" />
          </div>
          <div>
            <img alt="img" src="http://p1.music.126.net/fH5jn3t_v-0UMQVDPpXocA==/109951164945827613.jpg?imageView&quality=89" />
          </div>
          <div>
            <img alt="img" src="http://p1.music.126.net/fX2vOzcxvOMAo5Ne06wgHw==/109951164944069150.jpg?imageView&quality=89" />
          </div>
          <div>
            <img alt="img" src="http://p1.music.126.net/KNlq2Q3yMtYtr-G8Wkny7g==/109951164944041402.jpg?imageView&quality=89" />
          </div>
        </Carousel>
        <Tabs defaultActiveKey="1" >
          {tabList.map((item, index) => (
            <TabPane tab={<span>{item.icon}<br />{item.title}</span>} key={index}>
              <CardList cardList={cardList1} />
             
            </TabPane>
          ))}
        </Tabs>
      </div>
    )
  }
}