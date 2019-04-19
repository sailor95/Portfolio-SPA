import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigationbar from '../ui/navbar/Navigationbar';
import Home from '../../containers/home/Home';
import SoftwareProjectsPage from '../../containers/software-projects-page/SoftwareProjectsPage';
import PodcastsPage from '../../containers/podcasts-page/PodcastsPage';
import ArticlesPage from '../../containers/articles-page/ArticlesPage';
import PhotosAndDesignPage from '../../containers/photo-and-design-page/PhotosAndDesignPage';


const main = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigationbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/sw-projects" component={SoftwareProjectsPage} />
        <Route exact path="/podcasts" component={PodcastsPage} />
        <Route exact path="/articles" component={ArticlesPage} />
        <Route exact path="/photos-design" component={PhotosAndDesignPage} />
      </div>
    </BrowserRouter>
  );
}

export default main;