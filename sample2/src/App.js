// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Login from './components/Login';
import Landing from './components/Landing';
import AddTask from './components/AddTask';
import Tasklist from './components/Tasklist';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/AddTask">
            <AddTask/>
          </Route>
          <Route path="/tasklist">
            <Tasklist/>
          </Route>
          <Route path="/editTask">
            <Edit/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
