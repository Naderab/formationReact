import { useCallback, useState, useEffect } from "react";
import TaskForm from "../../components/taskForm/taskForm";
import TaskList from "../../components/taskList/taskList";
import * as api from "../../services/tasks.service"

function TaskPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const [loading,setLoading] = useState(false);
  const [isError,setIsError] = useState(false);

  const sayHello = useCallback((value) => {
    alert(value);
  }, []);

  
  // useEffect(() => {
  //   async function fetchData(){
  //     try {
  //     setLoading(true);
  //     const data = await api.fetchTasks();
  //     setTasks(data);
  //     setLoading(false);
  //     } catch (error) {
  //       setIsError(true);
  //       console.log(error);
  
  //     }
  //     console.log(isError);
  
  
  //   }
  //   fetchData();
  // }, [])

  useEffect(() => {
    async function search(){
      try {
      setLoading(true);
      if (searchValue.length === 0){
        setTasks([]);
        setLoading(false);
      }else {
        const newData =  await api.fetchTasksByFilter(searchValue);
        setLoading(false);
        setTasks(newData);
      }
      
      } catch (error) {
        console.log(error)
      }
    }
    search();
  }, [searchValue])
  
  const addTask = async (title) => {
        try {
          setLoading(true);
          const newTask = await api.addTask({title,});
          setTasks([...tasks, newTask]);
          setLoading(false);
        } catch (error) {
          console.log('error')
        }
      };
      const deleteTask = async (id) => {
        try {
          setLoading(true);
          await api.deleteTask(id);
          setTasks(tasks.filter((task) => task._id !== id));
          setLoading(false);
        } catch (error) {
          console.log('error')
        }
      }
      const updateTask = async (task) => {
        try {
          setLoading(true);
          const updatedTask = await api.updateTask(task._id, task);
          console.log(updatedTask)
          setTasks(tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));
          setLoading(false);
        } catch (error) {
          console.log('error')
        }
      }
      
  // const addTask = useCallback(
  //   (title) => {
  //    
  //     // alert(value)
  //     let task = {
  //       _id: Math.random(),
  //       title: title,
  //       duration: "0",
  //     };
  //     setTasks([...tasks, task]);
  //   },
  //   [tasks]
  // );
  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task._id !== id));
  // }

  // const updateTask = (task) => {
  //   setTasks(tasks.map((t) => (t._id === task._id ? task : t)));
  // }


  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      <TaskForm sayHello={sayHello} addTask={addTask} /><br></br>
      <input
        type="text"
        name="searchValue"
        placeholder="search here ..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {/* {loading ? (
        <div>loading .....</div>
      ) : (
        <>
          <Task />
          <Task />
          <Task />
        </>
      )} */}
      {isError && <p>No data</p> }
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
