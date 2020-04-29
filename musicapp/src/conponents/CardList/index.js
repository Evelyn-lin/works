import React, { Component } from 'react'
import { Card } from 'antd'
import './index.less'

export default class CardList extends Component {

    render() {
        const cardList = this.props.cardList;
        const title = cardList.title;
        const width = cardList.width;
        const imgList = cardList.imgList;
        return (
            <Card
                bordered={false}
                title={title}
                className="cardlist"
            >
                <ul>
                    {
                        imgList.map((item, index) => (

                            <a key={index} >
                                <li  style={{ width }}>
                                    <img style={{ width }} alt="图片" src={item.coverImgUrl} />
                                    <span>{item.name}</span>
                                </li>
                            </a>

                        ))
                    }
                </ul>
            </Card>
        )
    }
}



