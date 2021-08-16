import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './app/components/navigation/AppNavigator';
import AuthNavigator from './app/components/navigation/AuthNavigation';
import NavigationTheme from './app/components/navigation/NavigationTheme';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { Button } from 'react-native';

const App = () => {
  const netInfo = useNetInfo();
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
      <Button disabled={!netInfo.isInternetReachable} title="here" />
    </NavigationContainer>
  );
};

export default App;
