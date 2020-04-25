import React from 'react';
import { Carousel, Card } from 'antd';
import CardList from '../../conponents/CardList'; import { Tabs } from 'antd';
import { connect} from 'react-redux'
import './index.less'
const { TabPane } = Tabs;


 class MusicList extends React.Component {
    state={}
    render() {
        console.log(this.props.query);
        
        return (
            <div className="music_list">
                <p>搜索“许嵩”，找到1500首单曲</p>
                <Tabs defaultActiveKey="1" animated={false} tabBarGutter={50} >
                    <TabPane tab="单曲" key="1">
                        Content of Tab Pane 1
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
        query:state.query
    }
}
export default connect(mapStateToProps)(MusicList)
