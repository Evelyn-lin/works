import React from 'react';
import { Carousel, Card } from 'antd';
import CardList from '../../conponents/CardList';
import './index.less'


const { Meta } = Card;
export default class Discover extends React.Component {

  render() {
    const cardList1={
      title:'推荐歌单',
      width:'20%',
      imgList:[
        {
          key:'1',
          src:'http://p1.music.126.net/qNnAl8kyJ7i6SDr3M6nxcw==/109951164923002751.jpg?param=140y140',
          description:'歌里藏着小宇宙：星河在你耳中流动'
        },{
          key:'2',
          src:'http://p1.music.126.net/9O2u-wy4ZXUjVPIrUhezDA==/109951164931295462.jpg?param=140y140',
          description:'✧星河漫游 梦里有你✦ | 硬地新歌vol.10'
        },{
          key:'3',
          src:'http://p1.music.126.net/a2b-wcVrNbB1Ktum8q-uyw==/7870304232586557.jpg?param=140y1400',
          description:'【戏腔专题】伶人入画，一生天涯'
        },{
          key:'4',
          src:'http://p1.music.126.net/xBr4_b43p33N2vxbpg2nMw==/109951164770404940.jpg?param=140y140',
          description:'《真心对待对你好的人》'
        },
        {
          key:'5',
          src:'http://p1.music.126.net/bNybRPvWGgEuR8csL8-BqA==/109951164767005215.jpg?param=140y140',
          description:'如果你越来越沉默，越来越不想说'
        },
      ]
    }
    return (
      <div className="discover">
        <Carousel autoplay>
          <div>
            <img src="http://p1.music.126.net/qgS7LANBx-IcMiChnGW3ZQ==/109951164932569963.jpg?imageView&quality=89"/>
          </div>
          <div>
          <img src="http://p1.music.126.net/cALhuXEiMJGFMpP5rnrGYw==/109951164934170620.jpg?imageView&quality=89"/>
          </div>
          <div>
          <img src="http://p1.music.126.net/qgS7LANBx-IcMiChnGW3ZQ==/109951164932569963.jpg?imageView&quality=89"/>
          </div>
          <div>
          <img src="http://p1.music.126.net/qgS7LANBx-IcMiChnGW3ZQ==/109951164932569963.jpg?imageView&quality=89"/>
          </div>
        </Carousel>
        <CardList cardList = {cardList1} />
      </div>
    )
  }
}