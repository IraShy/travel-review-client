import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './../shared/Navbar'
import Reviews from './Reviews'
import Review from './Review'

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path={["/reviews", "/"]} component={Reviews} />
      <Route exact path="/reviews/:id" component={Review} /> 
    </Switch>
    </>
  );
}

export default App;
