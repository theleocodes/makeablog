import React from 'react'
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App