import './task.css'
function Task({title,color,duration,details}) {
    return ( <>
        <div className="task" style={{backgroundColor:color}}>
        <div className="title">
            {title}<br></br>
            {duration}<br></br>
            {details.difficulty}<br></br>
            {details.level}

        </div>
        <div className="actions">
            <span>delete</span>
            
            <span>update</span>
        </div>
    </div>
    
    </> );
}

export default Task;