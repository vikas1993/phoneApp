/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import Navigator from './routes/drawer'
import {Provider} from 'react-redux'
import store from './stores/configureStore'

const App: () => React$Node = () => {

  useEffect(()=>{
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.disableYellowBox = true;
  })

  return (
    
    <Provider store={store}>
      <Navigator/>
      </Provider>
  );
};


export default App;
