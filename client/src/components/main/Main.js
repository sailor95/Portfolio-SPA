import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigationbar from '../presentational/ui/navbar/Navigationbar';
import Home from '../../containers/home/Home';
import SoftwareProjectsPage from '../../containers/software-projects-page/SoftwareProjectsPage';
import PodcastsPage from '../../containers/podcasts-page/PodcastsPage';
import ArticlesPage from '../../containers/articles-page/ArticlesPage';
import PhotosAndDesignPage from '../../containers/photo-and-design-page/PhotosAndDesignPage';
import Login from '../presentational/login/Login';
import Register from '../presentational/register/Register';


const main = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigationbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/sw-projects" component={SoftwareProjectsPage} />
        <Route exact path="/podcasts" component={PodcastsPage} />
        <Route exact path="/articles" component={ArticlesPage} />
        <Route exact path="/photos-design" component={PhotosAndDesignPage} />
      </div>
    </BrowserRouter>
  );
}

export default main;