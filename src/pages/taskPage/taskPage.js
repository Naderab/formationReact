import Task from "../../components/task/task";
import TaskForm from "../../components/taskForm/taskForm";

function TaskPage() {
  const loading = false;        
  return (
    <>
      <TaskForm />
      {/* {loading ? (
        <div>loading .....</div>
      ) : (
        <>
          <Task />
          <Task />
          <Task />
        </>
      )} */}
      {loading && <div>loading .....</div>}
      {!loading && (
        <>
          <Task title="Learn Html" color="red" duration={60} details={{ difficulty:8,level:"level 2"}}/>
          <Task title="Learn React" color="gray" duration={60} details={{ difficulty:0,level:"level 1000"}}/>
          <Task title="Learn Angular" color="cyan" duration={60} details={{ difficulty:10000,level:"level 20000"}}/>
        </>
      )}
    </>
  );
}

export default TaskPage;
