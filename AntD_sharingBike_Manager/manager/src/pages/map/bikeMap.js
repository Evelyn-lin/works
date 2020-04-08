import React from 'react'
import { Card, Form } from 'antd'
import axios from '../../axios'
import BaseForm from '../../components/BaseForm'

export default class BikeMap extends React.Component {

    state = {
        total_count: 0
    }
    formList = [{
        type: '城市',
        width: 80
    },
    {
        type: '时间查询'
    }, {
        type: 'SELECT',
        label: '订单状态',
        field: 'order_status',
        initialValue: '0',
        list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '1', name: '已结束' }],
        width: 80
    }]

    componentWillMount() {
        this.requestList()
    }
    //查询表单
    requestList = () => {
        
        axios.ajax({
            url: '/map/bike_list',
            data: {
                params: this.params
            },
            isMock:true
        }).then(res => {
            if (res.code == 0) {
                this.setState({
                    total_count: res.result.total_count,
                })
                this.renderMap(res)
            }
        })
    }

    //地图渲染
    renderMap = (res) => {
        let list = res.result.route_list;
        // console.log(list);

        this.map = new window.BMap.Map('container')
        let gps1 = list[0].split(',');
        let startPoint = new window.BMap.Point(gps1[0], gps1[1]);
        let gps2 = list[list.length - 1].split(',');
        let endPoint = new window.BMap.Point(gps2[0], gps2[1]);
        this.map.centerAndZoom(endPoint, 11);

        //添加覆盖物-坐标点
        let startPointIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            ancher: new window.BMap.Size(18, 42)
        })
        let bikeMarkStart = new window.BMap.Marker(startPoint, { icon: startPointIcon })
        this.map.addOverlay(bikeMarkStart)
        let endPointIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            ancher: new window.BMap.Size(18, 42)
        })
        let bikeMarkend = new window.BMap.Marker(endPoint, { icon: endPointIcon })
        this.map.addOverlay(bikeMarkend)

        //绘制车辆行驶路线
        let routeList = [];
        list.forEach(item => {
            let p = item.split(',');
            routeList.push(new window.BMap.Point(p[0], p[1]))
        })

        let polyLine = new window.BMap.Polyline(routeList, {
            strokeColor: '#ef4136',
            strokeWeight: 2,
            strokeOpacity: 1
        })
        this.map.addOverlay(polyLine);

        //绘制服务区
        let servicePointList = [];
        let serviceList = res.result.service_list;
        serviceList.forEach(item => {
            servicePointList.push(new window.BMap.Point(item.lon, item.lat))
        })
        let polyServiceLine = new window.BMap.Polyline(servicePointList, {
            strokeColor: '#ef4136',
            strokeWeight: 3,
            strokeOpacity: 1
        })
        this.map.addOverlay(polyServiceLine)

        // 添加地图中的自行车图标
        let bikeList = res.result.bike_list;
        let bikeIcon = new window.BMap.Icon("/assets/bike.jpg", new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
        });
        bikeList.forEach((item) => {
            let p = item.split(",");
            let point = new window.BMap.Point(p[0], p[1]);
            var bikeMarker = new window.BMap.Marker(point, { icon: bikeIcon });
            this.map.addOverlay(bikeMarker);
        })
    }

    //提交
    handleFilterSumit = (filterParams) => {
        this.params = filterParams;
        this.requestList()
    }
    render() {
        return (
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilterSumit} />
                </Card>
                <Card>
                    <div>共{this.state.total_count}辆</div>
                    <div id="container" style={{ height: 500 }}></div>
                </Card>
            </div>
        )
    }
}