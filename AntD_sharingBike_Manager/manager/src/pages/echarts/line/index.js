import React from 'react'
import { Card } from 'antd'
import echartTheme from '../echartTheme'
// import echarts from 'echarts'
//按需加载、按需导入
import echarts from 'echarts/lib/echarts'
//导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

export default class Line extends React.Component {

    componentWillMount() {
        echarts.registerTheme('Imooc', echartTheme);
    }

    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
                }
            ]
        }
        return option;
    }

    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            legend: {
                data: ['OFO', '摩拜', '小蓝']
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'OFO',
                    type: 'line',
                    data: [2000, 3000, 5500, 6000, 6500, 7000, 9000]
                },
                {
                    name: '摩拜',
                    type: 'line',
                    data: [1000, 2000, 4000, 5000, 5500, 6000, 8000]
                },
                {
                    name: '小蓝',
                    type: 'line',
                    data: [1000, 2000, 2500, 3000, 3500, 4000, 6000]
                }
            ]
        }
        return option;
    }

    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
                    areaStyle: {}
                }
            ]
        }
        return option;
    }
    render() {
        return (
            <div>
                <Card title="折线图之一">
                    <ReactEcharts option={this.getOption()} theme='Imooc' style={{ height: 500 }} />
                </Card>
                <Card title="折线图之二" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption2()} theme='Imooc' style={{ height: 500 }} />
                </Card>
                <Card title="折线图之三" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption3()} theme='Imooc' style={{ height: 500 }} />
                </Card>
            </div>
        )
    }
}