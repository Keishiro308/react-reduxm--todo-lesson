import { createStore } from 'redux';
import React from 'react';
import {render} from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';
import {Provider} from 'react-redux';



function renderApp(store){
  render(
    <Provider store={store} >
      <TodoApp />
    </Provider>,
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