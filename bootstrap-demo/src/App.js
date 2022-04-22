import './App.css';
import React ,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './pages/Login';
import { Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path="/" render={()=><Redirect to="/login"/>}></Route>
           <Route path='/login' component={Login}></Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
