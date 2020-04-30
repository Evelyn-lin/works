import React from 'react';
import { Tabs, Spin } from 'antd';
import axios from '../../axios'
import { playSong } from '../../../redux/action'
import { connect } from 'react-redux'
import './index.less'


const { TabPane } = Tabs;
class NewSongs extends React.Component {


    state = {
        playList: [],
    }

    UNSAFE_componentWillMount() {
        this.requestList();
    }

    requestList = (type = 0) => {
        this.setState({ playList: [] })
        let loading = document.getElementById('loading');
        if (loading) {
            loading.style.display = 'block';
        }
        axios.ajax({
            url: '/top/song',
            params: {
                type
            }
        }).then(
            res => {
                let loading = document.getElementById('loading');

                if (loading) { loading.style.display = 'none'; }

                this.setState({ playList: res.data });

            })
    }

    handleClick = (item) => {
        const { playList } = this.state;
        const { dispatch } = this.props;
        let lis = document.querySelector('.songs_item').querySelectorAll('li');
        lis.forEach((li) => {
            li.className = ""
        });
        item.className = "active"


        let record = playList[Number(item.getAttribute('data-index'))];
        axios.ajax({
            url:"/song/url",
            params:{
                id:record.id
            }
        }).then(
            res => {
                let songUrl = res.data[0].url;
                let { dispatch } = this.props;
                let msg = {
                    index: record.index,
                    songUrl: songUrl,
                    duration: record.time
                }
                dispatch(playSong(msg));
            }
        )
    }

    render() {
        const { playList } = this.state;

        return (
            <div className="new_songs">
                <Tabs
                    className="new_songs_title"
                    defaultActiveKey="1" animated={false}
                    tabBarStyle={{}}
                    onChange={(activeKey) => {
                        this.requestList(activeKey)
                    }} >
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
                <Spin id="loading" tip="加载中..." />
                <Item playList={playList} handleClick={this.handleClick} />
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
                            <li key={index} data-index={index} onDoubleClick={(e) => { this.props.handleClick(e.target) }} >
                                <div className="song_item_left">
                                    <span >{index < 10 ? '0' + index : index}</span>
                                    <img className="sound" src="./img/sound2.svg" />
                                    <span>
                                        <img className="album" alt="img" src={item.album.picUrl} />
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

export default connect()(NewSongs)