import React, { Component } from 'react'
import { Card } from 'antd'
// import axios from '../../axios'
import axios from 'axios'
import './index.less'


export default class Rank extends Component {

    state = {
        playList: []
    }

    componentWillMount() {
        this.requestList();
    }

    requestList = () => {
        axios.ajax({
            url: '/top/playlist/highquality',
            params: {
                limit: 5,
                cat: '全部'
            }
        }).then(res => {
            this.setState({ playList: res.playlists })
        })
    }

    render() {
        const {playList} = this.state;
        return (
            <div className="rank">
                <Card
                    bordered={false}
                    title="官方榜"
                    style={{ height: 290 }}
                    className="card"
                >
                    <Item playList={playList}/>
                </Card>
            </div>
        )
    }
}

class Item extends Component {

    getTime = () => {
        let m = new Date().getMonth() + 1;
        let d = new Date().getDate();
        return `${m}月${d}日更新`
    }
    render() {
        const { playList } = this.props;
        return (
            <div className="rank_item">
                <div className="rank_item_title">
                    <div>
                        <i >飙</i>
                        <i>升榜</i>
                        <span>{this.getTime()}</span>
                    </div>
                </div>
                <ul className="rank_item_content">
                    {
                        playList.map((item, index) => (
                            <li key={index}>
                                <span>{index}</span>
                                <span>{item.name}</span>
                                <span>{item.singer}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}