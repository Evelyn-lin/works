import React from 'react';
import CardList from '../../../conponents/CardList';
import { Carousel } from 'antd';
import axios from '../../axios'
import './index.less'

export default class Recomand extends React.Component {


  state = {
    playList: []
  }

  UNSAFE_componentWillMount() {
    this.requestList();
  }

  requestList = () => {
    axios.ajax({
      url: '/personalized',
      params: {
        limit: 10,
      }
    }).then(res => {
      let data = res.result.map((item,index)=>{
        item.coverImgUrl=item.picUrl;
        item.key = index;
        return item
      })
      this.setState({ playList: data});
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
      <div className="recomand">
        <Carousel autoplay>
          <div>
            <img alt="img" src="http://p1.music.126.net/qgS7LANBx-IcMiChnGW3ZQ==/109951164932569963.jpg?imageView&quality=89" />
          </div>
          <div>
            <img alt="img" src="http://p1.music.126.net/cALhuXEiMJGFMpP5rnrGYw==/109951164934170620.jpg?imageView&quality=89" />
          </div>
          <div>
            <img alt="img" src="http://p1.music.126.net/K7E8WZqa4N7c6XijXNnBXQ==/109951164945097075.jpg?imageView&quality=89" />
          </div>
          <div>
            <img alt="img" src="http://p1.music.126.net/KNlq2Q3yMtYtr-G8Wkny7g==/109951164944041402.jpg?imageView&quality=89" />
          </div>
        </Carousel>
        <CardList cardList={cardList1} />
      </div>
    )
  }
}
