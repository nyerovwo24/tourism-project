import React from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Destinations from './pages/Destination';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
       
       <Switch>
         
          <Route path='/' exact component={Home} />
          <Route path='/destination/:id'>
          <Destinations />
        </Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
         
       </Switch>
       <Footer />
    </Router>
  );
}

export default App
