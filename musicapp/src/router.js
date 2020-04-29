import React from 'react'
import { HashRouter, Route,Switch } from 'react-router-dom'
import App from './App'
import Discover from './pages/discover'
import MusicList from './pages/musicList'

export default class IRouter extends React.Component {

    render() {
        return (
            <App>
                <HashRouter>
                    <Route path="/musicList" component={MusicList} />
                    <Route path="/discover" render={
                        () => {
                            return (
                                <Switch>
                                    <Route path="/discover" component={Discover} />
                                    <Route path="/discover/recomand" component={MusicList} />
                                </Switch>
                            )

                        }
                    } />
                </HashRouter>
            </App>
        )
    }
}