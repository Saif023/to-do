// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTask } from "../redux/actions";

// const TaskInput = () => {
//   const [task, setTask] = useState("");
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setTask(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (task.trim() !== "") {
//       dispatch(addTask(task));
//       setTask("");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={task}
//         onChange={handleChange}
//         placeholder="Enter task..."
//       />
//       <button onClick={handleSubmit}>Add Task</button>
//     </div>
//   );
// };

// export default TaskInput;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions"; // Adjust the path as necessary

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    if (title.trim() !== "") {
      dispatch(addTask({ id: Math.random().toString(), title, description }));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter task title..."
      />
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter task description..."
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TaskInput;
