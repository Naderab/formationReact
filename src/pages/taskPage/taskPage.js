import { useCallback, useState } from "react";
import TaskForm from "../../components/taskForm/taskForm";
import TaskList from "../../components/taskList/taskList";

function TaskPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "Learn Html",
      duration: "60",
    },
    {
      _id: "2",
      title: "Learn React",
      duration: "30",
    },
    {
      _id: "3",
      title: "Learn Angular",
      duration: "50",
    },
  ]);
  const loading = false;
  const sayHello = useCallback((value) => {
    alert(value);
  }, []);
  const addTask = useCallback(
    (title) => {
      // alert(value)
      let task = {
        _id: Math.random(),
        title: title,
        duration: "0",
      };
      setTasks([...tasks, task]);
    },
    [tasks]
  );
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task._id !== id));
  }

  const updateTask = (task) => {
    setTasks(tasks.map((t) => (t._id === task._id ? task : t)));
  }


  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      <TaskForm sayHello={sayHello} addTask={addTask} />
      {/* {loading ? (
        <div>loading .....</div>
      ) : (
        <>
          <Task />
          <Task />
          <Task />
        </>
      )} */}
      {loading ? (
        <div>loading .....</div>
      ) : (
        isVisible && (
          <>
            <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
          </>
        )
      )}
    </>
  );
}

export default TaskPage;
