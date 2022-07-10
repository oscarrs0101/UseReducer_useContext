export default function appReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'UPDATE_TASK': {
      const updatedTask = action.payload;

      const updatedTasks = state.tasks.map((task) => {
        if (task.id === updatedTask.id) {
          updatedTask.done = task.done;
          return updatedTask;
        }
        return task;
      });
      return {
        tasks: updatedTasks,
      };
    }
    case 'TOGGLE_TASK_DONE':
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, done: !task.done };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      break;
  }
}
