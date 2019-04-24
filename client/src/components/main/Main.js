import React from 'react';
import { Router, Route } from 'react-router-dom';

// Components
import Navigationbar from '../presentational/ui/navbar/Navigationbar';
import Home from '../../containers/home/Home';
import SoftwareProjectsPage from '../../containers/software-projects-page/SoftwareProjectsPage';
import PodcastsPage from '../../containers/podcasts-page/PodcastsPage';
import ArticlesPage from '../../containers/articles-page/ArticlesPage';
import PhotosAndDesignPage from '../../containers/photo-and-design-page/PhotosAndDesignPage';
import Login from '../presentational/login/Login';
import Register from '../presentational/register/Register';
import { PrivateRoute } from '../functional/privateRoute/PrivateRoute';
import Dashboard from '../../containers/dashboard/Dashboard';
import history from '../../history';


const main = () => {
  return (
    <Router history={history}>
      <div>
        <Navigationbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/sw-projects" component={SoftwareProjectsPage} />
        <Route exact path="/podcasts" component={PodcastsPage} />
        <Route exact path="/articles" component={ArticlesPage} />
        <Route exact path="/photos-design" component={PhotosAndDesignPage} />
      </div>
    </Router>
  );
}

export default main;