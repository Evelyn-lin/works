import React from 'react';
import { Tabs } from 'antd';
import axios from '../../axios'
import './index.less'


const { TabPane } = Tabs;
export default class NewSongs extends React.Component {


    state = {
        playList: []
    }

    UNSAFE_componentWillMount() {
        this.requestList();
    }

    requestList = (type=0) => {
        axios.ajax({
            url: '/top/song',
            params: {
                type
            }
        }).then(
            res => {
            this.setState({ playList: res.data });
            console.log(res);

        })
    }
    render() {
        const { playList } = this.state;

        return (
            <div className="new_songs">
                <Tabs className="new_songs_title" defaultActiveKey="1" animated={false} tabBarStyle={{}} onChange={(activeKey)=>{this.requestList(activeKey)}} >
                    <TabPane tab="全部" key="0" >
                    </TabPane>
                    <TabPane tab="华语" key="7">
                    </TabPane>
                    <TabPane tab="欧美" key="96">
                    </TabPane>
                    <TabPane tab="韩国" key="8">
                    </TabPane>
                    <TabPane tab="日本" key="16">
                    </TabPane>
                </Tabs>
                <Item playList={playList} />
            </div>

        )
    }
}

class Item extends React.Component {

    getTime = () => {
        let m = new Date().getMonth() + 1;
        let d = new Date().getDate();
        return `${m}月${d}日更新`
    }
    render() {
        const { playList } = this.props;
        return (
            <div className="songs_item">
                <ul className="songs_item_content">
                    {
                        playList.map((item, index) => (
                            <li key={index}>
                                <div className="song_item_left">
                                    <span>{index}</span>
                                    <span>
                                        <img alt="img" src={item.album.picUrl} />
                                        {item.name}
                                    </span>
                                </div>
                                <div className='song_item_mid'>
                                    <span>{item.artists[0].name}</span>
                                    <span>{item.album.name}</span>
                                </div>
                                <span>{item.duration}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}