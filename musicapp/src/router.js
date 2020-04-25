import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import App from './App'
import Discover from './pages/discover'
import MusicList from './pages/musicList'

export default class IRouter extends React.Component{

    render(){
        return(
            <App>
                <MusicList/>
            </App>
        )
    }
}