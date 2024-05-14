// export const addTask = (text) => {
//   return {
//     type: "ADD_TASK",
//     payload: {
//       id: Math.random().toString(),
//       text,
//     },
//   };
// };

export const deleteTask = (taskId) => {
  return {
    type: "DELETE_TASK",
    payload: taskId,
  };
};

export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};
