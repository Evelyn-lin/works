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
                style={{ height: 290 }}
                className="cardlist"
            >
                <ul>
                    {
                        imgList.map((item, index) => (

                            <li  key={index} style={{ width }}>
                                <img src={item.src} />
                                <span>{item.description}</span>
                            </li>

                        ))
                    }
                </ul>
            </Card>
        )
    }
}



