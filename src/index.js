import { createStore } from 'redux';
import React from 'react';
import {render} from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';



function renderApp(store){
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}






const store = createStore(tasksReducer);

// function handleChange(){
//   console.log(store.getState());
// }
// const unsbscribe = store.subscribe(handleChange);

// unsbscribe()



store.subscribe(() => renderApp(store));

renderApp(store);