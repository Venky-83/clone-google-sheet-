import { useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Tasklist from "./Tasklist";
import useFetch from "./UseFetch";


const Edit = () => {

    const{id} =useParams();
    
    let{data: task } =useFetch("http://localhost:5000/users"+id)

    let uName=useRef("");
    let history=useHistory();
    let uTaskName=useRef("");
    let uTaskDetail=useRef("");
    let uStartDate=useRef("");
    let uEndDate=useRef("");
    let status="";

    const handleEdit=()=>{
        const newTask=
        {
            userName:uName.current.value,
            taskName:uTaskName.current.value,
            taskDeatil:uTaskDetail.current.value,
            startDate:uStartDate.current.value,
            endDate:uEndDate.current.value,
            status
        }
        // console.log(newTask);

        fetch("http://localhost:5500/task/" +id,
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newTask)
        
        }
        ).then(()=>(alert("task edited successfully")))
        history.push("/tasklist");
    }
    
    

    return ( 
        <div className="edit-task">
        <h1>Edit a Task</h1>
                {task && <div>
                    <form onSubmit={handleEdit}>
                        <label htmlFor="">User Name</label><input type="text"  ref={uName} value={task.username}/>
                        <label>TaskName</label><input type="text" ref={uTaskName} value={task.taskname} />
                        <label>Task details</label><input type="textarea" ref={uTaskDetail} value={task.taskDetails} />
                        <label>Start Date</label><input type="date" ref={uStartDate} value={task.startDate} />      
                        <label>End Date</label><input type="date" ref={uEndDate}value={task.endDate} />
                        <input type="submit" />
                    </form>

                    <Link to ="/tasklist">
                        <button className="btn">Take me to Task list</button>
                    </Link>
                    </div>}
        </div>


     );
}
 
export default Edit;

