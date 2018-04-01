import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage } from '../pages';

const test = () => (
  <div>
    <h2>Main Router Work!!</h2>
  </div>
);

const MainRouter = () => (
  <div>
    <Route path="/test" component={test} />
    <Route path="/login" component={LoginPage} />
  </div>
);

export default MainRouter;