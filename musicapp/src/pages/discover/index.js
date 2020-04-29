import React from 'react';
import { Carousel, Tabs, Select, Menu } from 'antd';
import Recomand from './recomand'
import SongList from './songlist'
import SongRadio from './radio'
import Rank from './rank'

import './index.less'


const { TabPane } = Tabs;
export default class Discover extends React.Component {

  render() {
   
    return (
      <div className="discover">
        <Tabs className="discover_header"     defaultActiveKey="1" animated={false} tabBarStyle={{}}  >
          <TabPane tabBarStyle={{marginLeft:100}} tab="个性推荐" key="1" >
            <Recomand/>
          </TabPane>
          <TabPane tab="歌单" key="2">
           <SongList/>
          </TabPane>
          <TabPane tab="主播电台" key="3">
            <SongRadio/>
          </TabPane>
          <TabPane tab="排行榜" key="4">
            <Rank/>
          </TabPane><TabPane tab="歌手" key="5">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="最新音乐" key="6">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>

    )
  }
}