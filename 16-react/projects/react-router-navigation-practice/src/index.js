import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, useHistory } from 'react-router-dom';
import './index.css';
import App from './App';

const loggedIn = true;

function Stocks() {
  const history = useHistory();

  const handleClick = () => {
    window.alert('Sending info to the DB!');
    history.push('/');
  };

  if (!loggedIn) {
    return <Redirect to="/not-logged-in" />;
  }

  return (
    <div>
      <h1>Stocks</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export default Stocks
