import React from 'react';
import harvardArt from './data/harvardArt'
import GalleryNavigation from './components/GalleryNavigation';
import GallerView from './components/GalleryView';
import { Route, Switch } from 'react-router-dom';
import ArtImageTile from './components/ArtImageTile';

// console.log(harvardArt);

function App() {
  return (
    <div className='page-wrapper'>
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route path='/galleries/:galleryId'>
          <GallerView galleries={harvardArt.records} />
        </Route>
        <Route exact path='/'>
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
        </Route>
        <Route path='/not-found'>
          <h2> Page Not Found </h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
