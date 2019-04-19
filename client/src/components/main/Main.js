import React from 'react';

import Navigationbar from '../ui/navbar/Navigationbar';
import Home from '../../containers/home/Home';

const main = () => {
  return (
    <div>
      <Navigationbar />
      <Home />
    </div>
  );
}

export default main;