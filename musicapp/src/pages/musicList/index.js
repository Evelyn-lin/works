import React from 'react';
import { Table } from 'antd';
import { Tabs } from 'antd';
import { HeartFilled, VerticalAlignBottomOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import './index.less'
import axios from 'axios';
import Utils from './../../utils'
const { TabPane } = Tabs;


class MusicList extends React.Component {

    state = {
        dataSource: []
    }

    componentWillReceiveProps(nextProps) {
        this.getList(nextProps.query)
    }

    getList = (query) => {
        axios.get("https://autumnfish.cn/search?keywords=" + query).then(
            (res) => {
                let songList = res.data.result.songs;
                let dataSource = songList.map((item, index) => {

                    let obj = {};
                    obj.index = index;
                    obj.key = item.id;
                    obj.name = item.name;
                    obj.singer = item.artists[0].name;
                    obj.album = item.album.name;
                    obj.time = Utils.getDuration(item.duration);
                    obj.mvid = item.mvid;
                    obj.id = item.id;
                    obj.img = item.artists[0].img1v1Url;
                    return obj;
                })
                this.setState({ dataSource })
            }
        )
    }

    render() {
        const { dataSource } = this.state;
        const columns = [
            {
                title: '序号',
                dataIndex: 'index',
                width: 100,
                render(index) {
                    return index > 10 ? index : '0' + index
                }
            }, {
                title: '操作',
                dataIndex: 'operate',
                width: 100,
                render: () => {
                    return <div><HeartFilled /> < VerticalAlignBottomOutlined /></div>
                }
            }, {
                title: 'name',
                dataIndex: 'name',
            }, {
                title: '歌手',
                dataIndex: 'singer',
            }, {
                title: '专辑',
                dataIndex: 'album',
            }, {
                title: '时长',
                dataIndex: 'time',
            },
        ]
        return (
            <div className="music_list">
                <p>搜索“许嵩”，找到1500首单曲</p>
                <Tabs defaultActiveKey="1" animated={false} tabBarGutter={50} >
                    <TabPane tab="单曲" key="1">
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            scroll={{ y: 500 }}
                            pagination={{ pageSize: 50 }}
                        />
                    </TabPane>
                    <TabPane tab="歌手" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="专辑" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="视频" key="4">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="歌单" key="5">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="歌词" key="6">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="主播电台" key="7">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="用户" key="8">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        query: state.query
    }
}
export default connect(mapStateToProps)(MusicList)
