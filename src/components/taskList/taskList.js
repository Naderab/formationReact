import Task from "../task/task";

function TaskList({ tasks,deleteTask,updateTask }) {
  return (
    tasks &&
    tasks.map((task, index) => {
      return (
        <Task key={index} {...task} deleteTask={deleteTask} updateTask={updateTask} >
          <div>hello</div>
          <p>test</p>
        </Task>
      );
    })
  );
}

export default TaskList;
