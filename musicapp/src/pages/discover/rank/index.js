import React, { Component } from 'react'
import { Card } from 'antd'
import axios from 'axios'
import './index.less'


export default class Rank extends Component {

    componentDidMount() {
        this.requestList();
    }

    requestList = () => {
        axios.get('http://mobilecdnbj.kugou.com/api/v3/tag/specialList?plat=0&page=1&tagid=12&pagesize=30&ugc=1&id=68&sort=2').then(res=>{
            console.log(res);
            
        })
    }

    render() {
        return (
            <div className="rank">
                <Card
                    bordered={false}
                    title="官方榜"
                    style={{ height: 290 }}
                    className="card"
                >
                    <Item />
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
        const list = [
            {
                name: 'asdas',
                singer: 'sdas'
            }, {
                name: 'asdas',
                singer: 'sdas'
            }, {
                name: 'asdas',
                singer: 'sdas'
            }, {
                name: 'asdas',
                singer: 'sdas'
            },
        ]
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
                        list.map((item, index) => (
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