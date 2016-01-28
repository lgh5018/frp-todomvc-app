import Cycle from '@cycle/core';
import { makeDOMDriver, hJSX } from '@cycle/dom'; // eslint-disable-line no-unused-vars
import Rx from 'rx';
import localStorageDriver from 'cycle-local-storage';
import TodoApp from './components/todo-app.es6';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

function model(Storage) {
    return Storage
        .get('todos')
        .map((json) => {
            let todos;

            try {
                todos = JSON.parse(json);
            } catch (e) {
                todos = [];
            }

            return { todos };
        });
}

function view(state$) {
    return state$.map(({ todos }) => {
        console.log(todos);
        return Rx.Observable.just(<TodoApp todos={todos} />);
    });
}

function main({ Storage }) {
    const state$ = model(Storage);
    return {
        DOM: view(state$),
        Storage,
    };
}

const drivers = {
    DOM: makeDOMDriver('#app'),
    Storage: localStorageDriver,
};

Cycle.run(main, drivers);
