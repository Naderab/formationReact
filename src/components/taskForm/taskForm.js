import './taskForm.css'
function TaskForm() {

    const addTask = 'Add a new task'
    const steps = ["Enter the task title","Click on add task"]
    return ( <>
    <ul>
        {steps.map( (task) => {
            return <li>{task}</li>
        })}
    </ul>
        <form action="" className="form">
        <input type="text" name="task" id=""/>
        <button type="submit">{addTask}</button>
    </form>
    </> );
}

export default TaskForm;