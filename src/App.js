import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <h2>Hello checkout</h2>
          </Route>
          <Route path='/login'>
            <h2>Hello login</h2>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
