import useFetch from "./UseFetch";
import { Link } from "react-router-dom";



const Tasklist  = () => {

    let{data:tasks,pending,error}=useFetch("http://localhost:5500/task")

    let handleDelete=(id)=>{
        fetch("http://localhost:5500/task" +id, {method:"DELETE"})
    }

    return ( 
        <div className="task-list">

            <h1>List of all the task</h1>

            {error && <h1> {error}</h1> }

            {pending && <h1>Loading ....</h1> }
            {tasks && 
                <table>
                    <thead>
                        <tr >
                            <th>SLNO</th>   
                            <th>NAME</th>
                            <th>TASK NAME</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                         </tr>
                    </thead>
                        <tbody>
                            {tasks.map((task,i)=>(
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{task.userName}</td>
                                    <td>{task.taskName}</td>
                                    <td>{task.startDate}</td>
                                    <td>{task.endDate}</td>
                                    <td>{task.status}</td>
                                    {(task.status==="Completed") &&   <td><button onClick={()=>{handleDelete(task.id)}}>Delete</button></td>}
                                    {(task.status!=="Completed") &&   <td><Link to={ `/editTask${task.id}`}><button>Edit</button></Link> </td>}
                                    
                                </tr>
                            ))}
                        </tbody>


                    </table>
                    


            
            }
    



        </div>


     );
}
 
export default Tasklist;