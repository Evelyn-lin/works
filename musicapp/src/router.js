import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Discover from './pages/discover'
import MusicList from './pages/musicList'

export default class IRouter extends React.Component {

    render() {
        return (
            <App>
                <HashRouter>
                    <Route path="/musicList" component={MusicList} />
                    <Route path="/discover" component={Discover} />
                    <Redirect to="/discover" />
                </HashRouter>
            </App>
        )
    }
}