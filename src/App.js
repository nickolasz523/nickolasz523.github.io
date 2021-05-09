import './App.css';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import Home from './Components/home'
import About from './Components/about'
import Work from './Components/work'
import Contact from './Components/contact'
import NavbarHeader from './Components/navbarHeader';
import {AnimatePresence, motion} from 'framer-motion'




function App() {
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
      <NavbarHeader/>
        <Switch location= {location} key = {location.pathname}>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/work' component={Work}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </AnimatePresence>
  );
}


export default App;