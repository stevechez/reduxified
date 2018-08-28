import React, { Component } from 'react';
import './App.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <ul>
            <li><Link to="/home">HomePage</Link></li>
            <li><Link to="/about">AboutPage</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>


        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />

      </div>
    </div>

      </Router>

    );
  }
}

export default App;
