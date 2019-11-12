import React from 'react';
import {Provider} from 'react-redux';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import store from './src/_store';
import LoadingScreen from './src/screens/public/views/Loading';
import AuthStack from './src/screens/public';
import AppStack from './src/screens/private';

const RootNavigation = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: LoadingScreen,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
