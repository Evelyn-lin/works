const menuConfig = [
    {
        title:'推荐',
        key:'/recommend',
        group:[
            {
                title:'发现音乐',
                key:'/discover'
            },{
                title:'私人FM',
                key:'/fm'
            },{
                title:'LOOK直播',
                key:'/look'
            },{
                title:'视频',
                key:'/video'
            },{
                title:'朋友',
                key:'/friends'
            }]
    },{
        title:'我的音乐',
        key:'/music',
        group:[
            {
                title:'本地音乐',
                key:'/local'
            },{
                title:'下载管理',
                key:'/download'
            },{
                title:'我的音乐云盘',
                key:'/cloud'
            },{
                title:'我的电台',
                key:'/radio'
            },{
                title:'我的收藏',
                key:'/collection'
            }]
    },{
        title:'创建的歌单',
        key:'/created',
        list:[
        ] 
    },{
        title:'收藏的歌单',
        key:'/collected',
        list:[
        ] 
    }
]
export default menuConfig;