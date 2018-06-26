/*
-------------------------------------------------------------------------------
FILE_NAME: setup.js
Objective: Setup file
Tech Used: React-Native 0.45 & Redux

Author:
- Girish Kumar Gupta
- Simerdeep Singh
- Anshu Goyal

Copyright @
Employwise
Global GroupWare Solutions Limited
-------------------------------------------------------------------------------
*/

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage} from 'react-native';
import EwLoadingIndicator from './components/ewloadingindicator/ewloadingindicator';

/*
Constants
*/
const FILE_NAME = "setup.js : ";

function setup():React.Component {

  class Root extends Component {

    constructor() {

      console.log(FILE_NAME + "In constructor");

      super();
      this.state = {
        isLoading: false,
        store: configureStore(() => this.setState({ isLoading: false })),
        rehydrated: false,
      };
    }

    componentDidMount() {

      console.log(FILE_NAME + "In componentDidMount");


    }


    componentWillMount(){

      console.log(FILE_NAME + "In componentWillMount method");

      persistStore(this.state.store, { storage: AsyncStorage }, () => {
        this.setState({ rehydrated: true })
      });

    }

    render() {

      if(!this.state.rehydrated) {
        return <EwLoadingIndicator />
      }

      return (
        <Provider store = { this.state.store }>
          <App />

        </Provider>
      );

    }
  }

  return Root;
}

export default setup;
