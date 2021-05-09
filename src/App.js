import './App.css';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import Home from './Components/home'
import About from './Components/about'
import Work from './Components/work'
import Contact from './Components/contact'
import NavbarHeader from './Components/navbarHeader';
import {AnimatePresence, motion} from 'framer-motion'




function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavbarHeader/>
      <Route
        render={({location}) => (
          <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/joemama' render={() => <Home/>}/>
            <Route path='/about' render={() => <About/>}/>
            <Route path='/work' render={() => <Work/>}/>
            <Route path='/contact' render={() => <Contact/>}/>
          </Switch>
          </AnimatePresence>
        )}
        />
      </Router>
  );
}

export default App;