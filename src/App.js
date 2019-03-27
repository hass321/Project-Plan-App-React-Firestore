import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Custom Components
import Navbar from './components/layout/Navbar';
import Dashbard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashbard}/>
            <Route path="/project/:id" component={ProjectDetails}/>
            <Route path="/login" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/create" component={CreateProject}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
