

// reducers.js;
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], // Load tasks from local storage on initial load
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTasksAdd = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newTasksAdd)); // Save tasks to local storage when adding a task
      return {
        ...state,
        tasks: newTasksAdd,
      };
    case "DELETE_TASK":
      const newTasksDelete = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(newTasksDelete)); // Save tasks to local storage when deleting a task
      return {
        ...state,
        tasks: newTasksDelete,
      };
    default:
      return state;
  }
};

export default rootReducer;
