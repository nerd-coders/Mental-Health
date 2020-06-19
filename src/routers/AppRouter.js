import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from "../components/header";
import NotFoundPage from '../components/NotFoundPage';
import Homepage from "../components/homepage";
import Blogs from "../components/blogs";
import Forum from "../components/forum";
import Portal from "../components/portal";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path = "/" exact component = {Homepage}/>
        <Route path = "/blogs" exact component = {Blogs}/>
        <Route path = "/forum" exact component = {Forum}/>
        <Route path = "/portal" exact component = {Portal} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
