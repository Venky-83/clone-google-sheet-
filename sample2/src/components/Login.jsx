import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
    let [userVal , setUserval]=useState("");
    let [userPassword , setUsePassword]= useState("");
    let history = useHistory();
    
    const handleLogin=(e)=>{
        e.preventDefault();
        fetch("http://localhost:5000/users")
        .then((res)=>{return res.json()})
        .then((data)=>{
            let [user] = data.filter(user =>(user.userName===userVal || user.mailid===userVal) );
            if (user !== undefined && user.password===userPassword) {
                alert("login sucsessfully");
                history.push("/addTask");
            }
            else if(user !==undefined && user.password!==userPassword ){
                alert("wrong password please enterr the valid password");
            }
            else{
                alert("User not found");
            }
        })
        }
    return ( 
    <div className="login">
        <div className="logi-box">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" name="" id="" placeholder="User Name or mail id" value={userVal}
                onChange={(e)=>setUserval(e.target.value)} />
                <input type="password" name="" id="" placeholder="Password" value={userPassword} 
                onChange={(e)=>setUsePassword(e.target.value)}/>
                <input type="submit" />
            </form>
        </div>
    </div> 
    );
}
 
export default Login;
