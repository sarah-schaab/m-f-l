import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import ResumePage from './Pages/ResumePage'
import Footer from './HeaderComponents/Footer';
import NavBarApp from './HeaderComponents/NavBar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBarApp />
          
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="resume" exact path="/resume" component={ResumePage} />
          <Route name="about" exact path="/about" component={AboutPage} />
          <Route name="projects" exact path="/projects" component={ProjectsPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
