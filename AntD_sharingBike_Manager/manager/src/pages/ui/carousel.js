import React from 'react'
import { Card, Carousel } from 'antd'
import './ui.less';

export default class Carousels extends React.Component {

    render() {
        return (
            <div>
                <Card title="文字轮播" className="card-wrap">
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="card-wrap2">
                    <Carousel autoplay>
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" style={{width:'100%'}}/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}