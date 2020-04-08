import React, { Component } from 'react'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inEdit: false,
            flag: true,

        }
        this.editing = this.editing.bind(this);
    }
    //双击进入编辑状态
    editing() {
        let { todo } = this.props;
        //进入编辑状态后，todo.value 写到input中
        this.refs.myInput.value = todo.value;
        this.setState({ inEdit: true }, () => {
            this.refs.myInput.focus()
        })
    }
    render() {
        let { todo, deleteTodo, editTodo, changeHasCompleted } = this.props;
        let { editing } = this;
        let { inEdit, flag } = this.state;
        let completed = todo.hasCompleted ? "completed" : "";
        let className = inEdit ? completed + "editing" : completed;
        return (
            <li className={className}>
                <div className="view">
                    <input type="checkbox"
                        className="toggle"
                        checked={todo.hasCompleted}
                        onChange={() =>changeHasCompleted(todo) } />
                    <label onDoubleClick={editing}>{todo.value}</label>
                    <button className="destroy"
                        onClick={() => {
                            deleteTodo(todo)
                        }}>
                    </button>
                </div>
                <input type="text" className="edit" ref="myInput"
                    onBlur={e => {
                        if (flag) {
                            todo.value = e.target.value.trim();
                            if (editTodo(todo)) {
                                this.setState({ inEdit: false })
                            }
                        }
                    }}
                    onKeyUp={e => {
                        if (e.keyCode == 13) {
                            todo.value = e.target.value.trim();
                            if (editTodo(todo)) {
                                this.setState({ inEdit: false })
                            }
                        }
                        if (e.keyCode == 27) {
                            this.setState({ flag: false, inEdit: false })
                        }
                        setTimeout(() => {
                            this.setState({ flag: true })
                        }, 10)
                    }}
                />
            </li>
        )
    }
}
export default Item;