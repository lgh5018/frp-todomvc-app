import Cycle from '@cycle/core';
import { makeDOMDriver, hJSX } from '@cycle/dom'; // eslint-disable-line no-unused-vars
import Rx from 'rx';

module.exports = function () {
    Cycle.run(main, { DOM: })
}

function main({ DOM }) {

}

function renderHeader() {
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
    );
}

function renderMain({ todos }) {
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todos.forEach(renderTodo)}
            </ul>
        </section>
    );
}

function renderTodo(todo) {
    return (
        <li className={classNames({ completed: todo.completed })}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} />
                <label>{todo.text}</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
        </li>
    );
}

function renderFooter() {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>0</strong> items left</span>
            <ul className="filters">
                <li>
                    <a className="selected" href="#/">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    );
}

