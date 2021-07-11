import './App.css';
import NavBar from './components/Moleculars/NavBar';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login';
import Service from './pages/serviceAdvisor/Dashboard'
import Test from './pages/serviceAdvisor/Test'
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminStaff from './pages/admin/AdminStaff';



function App() {
  return (
    <div className="overflow-hidden">
    {/* <NavBar/> */}
      <Router>


          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/serviceadvisor" exact component={Service} />
            <Route path="/test" exact component={Test} />
            <Route path="/admin" exact component={AdminDashboard} />
            <Route path="/adminstaff" exact component={AdminStaff} />


          </Switch>
      </Router>
      
      
    </div>
  );
} 

export default App;
