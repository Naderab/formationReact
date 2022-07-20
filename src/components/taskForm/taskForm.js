import { memo, useEffect, useState } from "react";
import "./taskForm.css";
import { Button } from 'antd';

function TaskForm(props) {
  // props.sayHello('Hello from TaskForm');
  const [title, setTitle] = useState("");
  const addTask = "Add a new task";
  const steps = ["Enter the task title", "Click on add task"];

    // First useEffect example

  // useEffect(() => {
  //   document.title = `${title} - ${addTask}`;
  //   console.log("we are in use effect");
  //   // setTitle("Hello",Math.random());
  // })

    // Second useEffect example

  useEffect(() => {
    document.title = "hi";
    console.log("we are in use effect");
    // setTitle("Hello",Math.random());
  })
  console.log("we are out use effect");

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
          <Button type="primary" onClick={()=> props.addTask(title)}>{addTask}

      </Button>
    </>
  );
}

export default memo(TaskForm);

// props children : to consult th children of the component (balise HTML)
