import { useState } from "react";
import TaskForm from "../../components/taskForm/taskForm";
import TaskList from "../../components/taskList/taskList";

function TaskPage() {
  const [isVisible, setIsVisible] = useState(true);
  const loading = false; 
  const tasks = [{
    _id:"1",
    title: "Learn Html",
    duration: "60",
  },
  {
    _id:"2",
    title: "Learn React",
    duration: "30",
  },{
    _id:"1",
    title: "Learn Angular",
    duration: "50",
  }]      
  const sayHello = (value) => {
    alert(value)
  } 
  return (
    <>
    <button onClick={()=>setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show"}</button>
      <TaskForm sayHello={sayHello}/>
      {/* {loading ? (
        <div>loading .....</div>
      ) : (
        <>
          <Task />
          <Task />
          <Task />
        </>
      )} */}
      {loading ? <div>loading .....</div>:(
        isVisible &&
        <>
          <TaskList tasks={tasks} />
        </>
      )}
      
    </>
  );
}

export default TaskPage;
