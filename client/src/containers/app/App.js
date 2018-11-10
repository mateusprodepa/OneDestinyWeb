import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../../reducers/index';

import Routes from '../routes/routes';

import '../../css/App.css';
import '../../css/Fonts.css';

const enhancers = compose( window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(reducer, enhancers, applyMiddleware(thunk));

class App extends Component {

  componentDidMount() {
    window.logout = function() {
      localStorage.removeItem('ONEDESTINY_TOKEN_KEY');
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
