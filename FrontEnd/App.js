import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './app/components/navigation/AppNavigator';
import AuthNavigator from './app/components/navigation/AuthNavigation';
import NavigationTheme from './app/components/navigation/NavigationTheme';

const App = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
