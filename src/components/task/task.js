import './task.css'
import { useState } from 'react';
import TaskForm from '../taskForm/taskForm';
function Task({title,duration,children,_id,deleteTask,updateTask}) {
    const [isUpdated,setIsUpdated] = useState(true);
    const [titleUpdated,setTitleUpdated]= useState(title)
    const handleUpdateTask = ()=>{
        console.log(titleUpdated)
        updateTask({_id,title:titleUpdated,duration})
        setIsUpdated(!isUpdated)
    }

    return ( 
    
        <div className="task" style={{backgroundColor:'cyan'}}>
    {isUpdated ? ( <><div className={`title ${ duration > 55 ? "customTask":""}`}>
            {titleUpdated}
        </div>
        {duration}
        <div className="actions">
            <button type="submit" onClick={()=>deleteTask(_id)}>delete</button>
            <button onClick={()=>setIsUpdated(!isUpdated)}>update</button>
        </div>
        <div>{children[0]}</div> 
        </>):(<>
      <ul>
       
      </ul>
      <input
        type="text"
        name="title"
        value={titleUpdated}
        onChange={(e) => setTitleUpdated(e.target.value)}
      />
      <button type="submit" onClick={handleUpdateTask}>update</button>
      
    </>)}
    </div>);
}

export default Task;