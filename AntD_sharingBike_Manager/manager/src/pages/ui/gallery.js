import React from 'react'
import { Card, Row, Col, Modal } from 'antd'

export default class Gallery extends React.Component {
    state = {
        src: null,
        visible: false
    }
    openGallery = (imgsrc) => {
        this.setState({
            src: '/gallery/' + imgsrc,
            visible: true
        })
    }
    render() {
        const { Meta } = Card;
        const imageList = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png'],
        ]
        const gallery = imageList.map((item) =>
            item.map((img, index) =>
                <Card
                    key={index}
                    style={{ marginBottom: 10 }}
                    cover={<img src={'/gallery/' + img} onClick={() => this.openGallery(img)} />}
                >
                    <Meta
                        title="Gallery"
                        description="This is a description" />

                </Card>))
        return (

            < div >
                <Row gutter={[10]}>
                    <Col md={5}>{gallery[0]}</Col>
                    <Col md={5}>{gallery[1]}</Col>
                    <Col md={5}>{gallery[2]}</Col>
                    <Col md={5}>{gallery[3]}</Col>
                    <Col md={4}> {gallery[4]}</Col>
                </Row>
                <Modal
                    title="图片画廊"
                    width={400}
                    visible={this.state.visible}
                    onCancel={() => this.setState({ visible: false })}
                    footer={null}
                    centered={true}
                >
                    {<img src={this.state.src} style={{ width: 350 }} />}
                </Modal>
            </div>
        )
    }
}