import './App.css';
import {BrowserRouter as Router, Switch, Route, useLocation,   Redirect} from 'react-router-dom';
import Home from './Components/home'
import About from './Components/about'
import Work from './Components/work'
import Contact from './Components/contact'
import NavbarHeader from './Components/navbarHeader';
import {AnimatePresence, motion} from 'framer-motion'
import Particles from 'react-particles-js'
import ParticleBackground from './Components/ParticleBackground'




function App() {
  const location = useLocation();
  const imageDetails = {
    height: 875,
	  width: 561.6,
  };
  return (
      <AnimatePresence exitBeforeEnter>
      <NavbarHeader/>
        <Switch location= {location} key = {location.pathname}>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path='/home' component={Home}/>
          <Route path='/about' component={About} imageDetails={imageDetails}/>
          <Route path='/work' component={Work}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </AnimatePresence>
  );
}


export default App;