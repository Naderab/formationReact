import Task from './../task/task';

function TaskList({tasks}) {
    return ( tasks && tasks.map((task,index) => {
        return <Task key={index} {...task} >
            <div>hello</div>
            <p>test</p>
        </Task>
    }) );
}

export default TaskList;