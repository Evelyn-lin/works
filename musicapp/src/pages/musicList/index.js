import React from 'react';
import { Table } from 'antd';
import { Tabs } from 'antd';
import { connect } from 'react-redux'
import './index.less'
import axios from '../axios';
import Utils from './../../utils'
import { playSong } from '../../redux/action';
const { TabPane } = Tabs;


class MusicList extends React.Component {

    state = {
        dataSource: [],
        activeIndex: -1,
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.getList(nextProps.query);
    }
    UNSAFE_componentWillMount() {
        const { query } = this.props;
        this.getList(query);
    }

    getList = (query) => {
        axios.ajax({
            url:"/search",
            params:{
                keywords:query
            }
        }).then(
            (res) => {
                let songList = res.result.songs;
                let dataSource = songList.map((item, index) => {
                    let obj = {};
                    obj.index = index;
                    obj.key = item.id;
                    obj.name = item.name;
                    obj.singer = item.artists[0].name;
                    obj.album = item.album.name;
                    obj.time = parseInt(item.duration / 1000);
                    obj.mvid = item.mvid;
                    obj.id = item.id;
                    obj.img = item.artists[0].img1v1Url;
                    return obj;
                })
                this.setState({ dataSource });
            }
        )

    }

    play = (record) => {
        this.setState({ activeIndex: record.index });
        axios.ajax({
            url:"/song/url",
            params:{
                id:record.id
            }
        }).then(
            res => {
                let songUrl = res.data[0].url;
                let { dispatch } = this.props;
                let msg = {
                    index: record.index,
                    songUrl: songUrl,
                    duration: record.time
                }
                dispatch(playSong(msg));
            }
        )

    }

    addLike = (e) => {
        let like = e.target.like;
        e.target.like = !like;
        e.target.src = like ? "./img/heart.svg" : "./img/heartfill.svg"
    }

    render() {
        const { dataSource, activeIndex } = this.state;
        const { query } = this.props;
        let that = this;
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
                render() {
                    return <div>
                        <img alt="img" style={{ marginRight: 10 }} onClick={(e) => that.addLike(e)} like="false" src="./img/heart.svg" />
                        <img alt="img" src="./img/download.svg" />
                    </div>
                }
            }, {
                title: '音乐标题',
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
                render(time) {
                    let duration = Utils.getDuration(time);
                    return duration
                }
            },
        ]
        return (
            <div className="music_list">
                <p>搜索“{query}”，找到1500首单曲</p>
                <Tabs defaultActiveKey="1" animated={false} tabBarGutter={50} >
                    <TabPane tab="单曲" key="1">
                        <Table
                            size="small"
                            dataSource={dataSource}
                            columns={columns}
                            scroll={{ y: 500 }}
                            pagination={{ pageSize: 50 }}
                            rowClassName={(record, index) => { return index === activeIndex ? 'table-row-active' : ""; }}
                            onRow={record => {
                                return {
                                    onDoubleClick: () => {
                                        this.play(record)
                                    }
                                }
                            }}
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
