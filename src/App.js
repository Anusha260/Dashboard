import React from "react"
import './App.css';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import {Link,Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Link id="dashboard" to="/Dashboard"><button id="dashboardbtn">Dashboard</button></Link>
      <Link id="signup" to="/Signup"><button id="signupbtn">Signup</button></Link>

      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
