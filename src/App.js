import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Movie from './components/Movie';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path='/movie/:id' component={Movie} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;