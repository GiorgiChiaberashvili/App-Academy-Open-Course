import { Route, Switch, NavLink, useHistory } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

function App() {
  const handleClick = () => {
    window.alert('Sending info to the DB!');
  };

  return (
    <div className='main'>
      <h1>App Component</h1>
      <div>
        <nav className="comp nav">
          <ul>
            <li>
              <a href="/movies">Anchor</a>
            </li>
            <li>
              <NavLink activeClassName='purple' activeStyle={{ fontWeight: 'bold' }} exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='purple' activeStyle={{ fontWeight: 'bold' }} to="/">Stocks</NavLink>
            </li>
            <li>
              <NavLink activeClassName='purple' activeStyle={{ fontWeight: 'bold' }} to="/">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/not-logged-in'>
          <h1> You Must Be Logged In To Enter.</h1>
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
