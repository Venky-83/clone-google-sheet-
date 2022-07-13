import {Link} from 'react-router-dom'
const Landing = () => {    
    return ( 
        <div className="landing">
            <Link to="/login"> <button>Login to your Account</button> </Link>
            <h2>Don't have an Account</h2>
            <Link to="/signup"> <button>Create New Account</button> </Link>
        </div>
     );
}
 
export default Landing;