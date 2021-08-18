import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './app/components/navigation/AppNavigator';
import AuthNavigator from './app/components/navigation/AuthNavigation';
import NavigationTheme from './app/components/navigation/NavigationTheme';
import OfflineNotice from './app/components/OfflineNotice';

const App = () => {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        {/* <AppNavigator style={{ zIndex: -1 }} /> */}
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
