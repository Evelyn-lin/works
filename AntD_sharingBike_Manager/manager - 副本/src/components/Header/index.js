import React from 'react'
import Util from '../../utils/utils'
import axios from '../../axios';
import { Row, Col } from 'antd';
import './index.less'

export default class Header extends React.Component {
    state = {}

    componentWillMount() {
        let sysTime = Util.formateDate(new Date());
        setInterval(() => {
            sysTime = Util.formateDate(new Date())
        }, 1000);
        this.setState({
            userName: 'Evelyn',
            sysTime
        })
        this.getWeatherAPIData();
    }
    getWeatherAPIData = () => {
        let city = '重庆';
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then(res => {
            let data = res.results[0].weather_data[0];
            this.setState({
                dayPictureUrl: data.dayPictureUrl,
                weather: data.weather,
            })
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} />
                        </span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}