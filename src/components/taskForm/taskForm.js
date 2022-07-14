import { memo, useState } from "react";
import "./taskForm.css";
function TaskForm(props) {
  // props.sayHello('Hello from TaskForm');
  const [title, setTitle] = useState("");
  const addTask = "Add a new task";
  const steps = ["Enter the task title", "Click on add task"];
  return (
    <>
      <ul>
        {steps.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" onClick={()=> props.addTask(title)}>
        {addTask}
      </button>
    </>
  );
}

export default memo(TaskForm);

// props children : to consult th children of the component (balise HTML)
