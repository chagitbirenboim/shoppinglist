import logo from './logo.svg';
import './App.css';
import Home from './home'
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>

  );
}

export default App;
