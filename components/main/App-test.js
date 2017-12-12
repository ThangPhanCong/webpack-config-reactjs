import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route,Switch } from 'react-router'
import {BrowserRouter, Link} from 'react-router-dom'
import FmsDropdownTest from '../components/../FmsDropdown/FmsDropdownTest.jsx'
import FmsButtonTest from '../components/../FmsButton/FmsButtonTest.jsx'
import Popovers from '../components/../Popovers/Popovers.jsx'
import AllComponent from './AllComponentTest.js'
export const Links = () => <nav>
    <Link to='/FmsButtonTest'>FmsButton<br/></Link>
    <Link to='/FmsDropdownTest'>FmsDropdown<br/></Link>
    <Link to='/Popovers'>Popovers</Link>
  </nav>


class App extends React.Component {
  render(){
    return(
        <BrowserRouter>
           <Switch>
                <Route path="/main" component={AllComponent} />
                <Route path="/Popovers" component={Popovers} />
                <Route path="/FmsButtonTest" component={FmsButtonTest} />
                <Route path="/FmsDropdownTest" component={FmsDropdownTest} />
           </Switch>
      </BrowserRouter>
    );
  }
}

export default App
