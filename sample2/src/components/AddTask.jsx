import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const AddTask = () => {
    let history=useHistory();
    let uName=useRef("");
    let uTaskName=useRef("");
    let uTaskDetail=useRef("");
    let uStartDate=useRef("");
    let uEndDate=useRef("");

    const handleSubmit=(e)=>{
        e.preventDefault() ;
        // alert(uName.current.value)

        let currentDate=new Date();
        let startDate = new Date(uStartDate.current.value);
        let endDate = new Date(uEndDate.current.value);
        let status="";

        if(currentDate<startDate)
            {
                status="Pending";
            }
        else if(currentDate>=startDate && currentDate<=endDate)
            {
                status="Ongoing";
            }
        else
            {
                status="Completed"
            }




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

        fetch("http://localhost:5500/task",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newTask)
        
        }
        ).then(()=>(alert("task added successfully")))
        history.push("/tasklist");
    }


    
    return ( <div className="AddTask">
        <h1>Add a Task</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">User Name</label><input type="text"  ref={uName} />
            <label>TaskName</label><input type="text" ref={uTaskName}/>
            <label>Task details</label><input type="textarea" ref={uTaskDetail}/>
            <label>Start Date</label><input type="date" ref={uStartDate} />      
            <label>End Date</label><input type="date" ref={uEndDate}/>
            <input type="submit" />
        </form>

        <Link to ="./tasklist">
            <button>Take me to Task list</button>
        </Link>
    </div> );
}
 
export default AddTask; 