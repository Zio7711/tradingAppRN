import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AppNavigator from './app/components/navigation/AppNavigator';
import jwtDecode from 'jwt-decode';

import AuthNavigator from './app/components/navigation/AuthNavigation';
import NavigationTheme from './app/components/navigation/NavigationTheme';
import OfflineNotice from './app/components/OfflineNotice';

const App = () => {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

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
