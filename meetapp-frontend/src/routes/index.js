import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';
import Details from '~/pages/Details';
import NewMeetup from '~/pages/NewMeetup';
import EditMeetup from '~/pages/EditMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
      <Route path="/new-meetup" component={NewMeetup} isPrivate />
      <Route path="/edit-meetup/:id" component={EditMeetup} isPrivate />
    </Switch>
  );
}
