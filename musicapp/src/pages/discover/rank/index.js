import React, { Component } from 'react'
import { Card } from 'antd'
import axios from 'axios'
import './index.less'


export default class Rank extends Component {

    state = {
        playList: null
    }

    componentWillMount() {
        this.requestList();
    }

    requestList = () => {

        axios({
            url: './json/list.json',
            method: 'get'
        }).then(res => {
            this.setState({ playList: res.data.playlist.tracks })
        })
    }

    render() {
        const { playList } = this.state;
        return (
            <div className="rank">
                <Card
                    bordered={false}
                    title="官方榜"
                    style={{ height: 290 }}
                    className="card"
                >
                    <Item playList={playList} />
                    <Item playList={playList} />
                    <Item playList={playList} />
                    <Item playList={playList} />
                    <Item playList={playList} />
                    <Item playList={playList} />
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

    getLis = () => {
        const { playList } = this.props;
        if (playList) {
            let lis = playList.map((item, index) => {
                if(index<8){
                    return(
                        <li key={index}>
                            <span>{index+1}</span>
                            <span>{item.name}</span>
                            <span>{item.ar[0].name}</span>
                        </li>
                    )
                }
            })

            return lis
        }
    }

    render() {
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
                    {this.getLis()}
                </ul>
            </div>
        )
    }
}