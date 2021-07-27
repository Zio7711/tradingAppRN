import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './app/components/navigation/AuthNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
