import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let { todoNum, viewTodo, clearCompleted } = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">{todoNum} {todoNum>1 ? 'items' : 'item'} left</span>
                <ul className="filters">
                    <li><a href="#/all" onClick={() => viewTodo("all")}>All</a></li>
                    <li><a href="#/active" onClick={() => viewTodo("active")}>Active</a></li>
                    <li><a href="#/completed" onClick={() => viewTodo("completed")}>Completed</a></li>
                </ul>
                <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            </footer>
        )
    }
}

export default Footer;