import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './../shared/Navbar'
import Reviews from './Reviews'
import Review from './Review'
import CreateReview from './CreateReview'
import NoMatch from './NoMatch'
import EditReview from './EditReview'

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path={["/reviews", "/"]} component={Reviews} />
      <Route exact path="/reviews/create" component={CreateReview} />
      <Route exact path="/reviews/:id/edit" component={EditReview} />
      <Route exact path="/reviews/:id" component={Review} /> 
      <Route component={NoMatch} />
    </Switch>
    </>
  );
}

export default App;
