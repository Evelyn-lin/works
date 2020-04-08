import React, { Component } from 'react'

import Footer from './Footer.jsx'
import Item from './Item.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoDatas: [],
            todoNum: 0,
            view: "all",//过滤
            flag: false,//全选全不选
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.changeHasCompleted = this.changeHasCompleted.bind(this);
        this.viewTodo = this.viewTodo.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
        this.selectAll = this.selectAll.bind(this);
    }
    //添加todo
    addTodo(e) {
        if (e.keyCode != 13) return;
        if (!e.target.value) return;
        let { todoDatas, todoNum } = this.state;
        let todo = {};
        todo.id = new Date().getTime();
        todo.value = e.target.value.trim();
        todo.hasCompleted = false;
        todoDatas.push(todo);
        todoNum++;
        this.setState({ todoDatas, todoNum });
        e.target.value = "";
    }
    //删除todo
    deleteTodo(todo) {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.filter((value) => {
            if (value.id == todo.id) {
                return false
            } else {
                return true
            }
        })
        if (!todo.hasCompleted) {
            todoNum--
        }
        this.setState({ todoDatas, todoNum })
    }
    //编辑todo
    editTodo(todo) {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.map((value) => {
            if (value.id == todo.id) {
                value.value = todo.value;
            }
            return value;
        })
        this.setState({ todoDatas });
        return true;
    }
    //改变todo的完成状态
    changeHasCompleted(todo) {
        let { todoDatas, todoNum } = this.state;
        todoDatas = todoDatas.map((value) => {
            if (value.id == todo.id) {
                value.hasCompleted = !todo.hasCompleted;
                if (value.hasCompleted) {
                    todoNum--
                } else {
                    todoNum++
                }
            }
            return value;
        })
        this.setState({ todoDatas, todoNum })
    }
    //过滤todo all active completed
    viewTodo(view) {
        this.setState({ view })
    }
    //清除已完成
    clearCompleted() {
        let { todoDatas } = this.state;
        todoDatas = todoDatas.filter((todo) => {
            if (todo.hasCompleted) {
                return false
            } else {
                return true
            }
        })
        this.setState({ todoDatas });
    }
    //全选和全不选
    selectAll() {
        let { flag, todoDatas, todoNum } = this.state;
        flag = !flag;
        if (flag) {
            todoDatas = todoDatas.map((todo) => {
                todo.hasCompleted = true;
                return todo;
            })
            todoNum = 0;
        } else {
            todoDatas = todoDatas.map((todo) => {
                todo.hasCompleted = false;
                return todo;
            })
            todoNum = todoDatas.length;
        }

        this.setState({ todoDatas, todoNum, flag })
    }
    render() {
        let { addTodo, deleteTodo, editTodo, changeHasCompleted, viewTodo, clearCompleted, selectAll } = this;
        let { todoNum, todoDatas, view } = this.state;
        todoDatas = todoDatas.filter((todo) => {
            switch (view) {
                case "all":
                    return true;
                case "active":
                    return !todo.hasCompleted;
                case "completed":
                    return todo.hasCompleted;
            }
        })
        let items = todoDatas.map((todo, index) => {
            return (
                <Item
                    todo={todo}
                    key={index}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    changeHasCompleted={changeHasCompleted}

                />
            )
        })
        return (
            <div className="todoapp">
                <header>
                    <h1>Todos</h1>
                    <input type="text" className="new-todo" placeholder="What need to do!" onKeyUp={addTodo} />
                </header>
                <section className="main">
                    <input type="checkbox" className="toggle-all" onChange={selectAll} />
                    <ul className="todo-list">
                        {items}
                    </ul>
                </section>
                <Footer todoNum={todoNum} viewTodo={viewTodo} clearCompleted={clearCompleted}></Footer>
            </div>
        )
    }
}

export default App;