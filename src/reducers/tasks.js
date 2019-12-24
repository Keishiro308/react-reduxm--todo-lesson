const initialState = {
  task: '',
  tasks:[]
};

export default function tasksReducer(state = initialState, action){
  switch(action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.task])
      };
    default:
      return state;
  }
}