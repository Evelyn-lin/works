import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Main from '../route3/Main'
import About from '../route1/About'
import Info from './info'
import Topic from '../route1/Topic'
import Nomatch from './NoMatch'

export default class IRouter extends React.Component {

    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                    <Route path="/main"  render={
                        ()=>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                    <Route component={Nomatch}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
}