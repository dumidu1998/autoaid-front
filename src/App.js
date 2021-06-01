import './App.css';
import NavBar from './components/Moleculars/NavBar';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login';



function App() {
  return (
    <div className="overflow-hidden">
    <NavBar/>
      <Router>


          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />


          </Switch>
      </Router>
      
      
    </div>
  );
} 

export default App;
