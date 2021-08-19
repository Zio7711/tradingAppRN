import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AppNavigator from './app/components/navigation/AppNavigator';
import AppLoading from 'expo-app-loading';

import AuthNavigator from './app/components/navigation/AuthNavigation';
import NavigationTheme from './app/components/navigation/NavigationTheme';
import OfflineNotice from './app/components/OfflineNotice';

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={() => {
          console.log('error in appLoading component');
        }}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
