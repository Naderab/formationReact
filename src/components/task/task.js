import './task.css'
function Task({title,duration,children}) {
    return ( 
    <div className="task" style={{backgroundColor:'cyan'}}>
        <div className={`title ${ duration > 55 ? "customTask":""}`}>
            {title}
        </div>
        {duration}
        <div className="actions">
            <span>delete</span>
            
            <span>update</span>
        </div>
        <div>{children}</div>
    </div>
     );
}

export default Task;