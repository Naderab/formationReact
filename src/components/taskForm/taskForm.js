import { memo } from 'react';
import './taskForm.css'
function TaskForm(props) {
    // props.sayHello('Hello from TaskForm');
    const addTask = 'Add a new task'
    const steps = ["Enter the task title","Click on add task"]
    return ( <>
    <ul>
        {steps.map( (task) => {
            return <li>{task}</li>
        })}
    </ul>
        <input type="text" name="task" id=""/>
        <button type="submit">{addTask}</button>
    </> );
}

export default memo(TaskForm);

// props children : to consult th children of the component (balise HTML)