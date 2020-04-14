import { Route, HashRouter } from 'react-router-dom'
import React from 'react'
import App from './App'
import Fade from './contain/fade'
import Loading from './contain/loading'
import Process from './contain/process'
import Info from './contain/info'
import Pagination from './contain/pagination'
import Form from './contain/form'

export default class Irouter extends React.Component {

    render() {
        return (
            <App>
                <HashRouter>
                    <Route path="/fade" component={Fade} />
                    <Route path="/loading" component={Loading} />
                    <Route path="/process" component={Process} />
                    <Route path="/info" component={Info} />
                    <Route path="/pagination" component={Pagination} />
                    <Route path="/form" component={Form} />
                </HashRouter>
            </App>
        )
    }
}