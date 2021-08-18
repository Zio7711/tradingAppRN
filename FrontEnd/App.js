import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import AuthContext from './app/auth/context';
import AppNavigator from './app/components/navigation/AppNavigator';

import AuthNavigator from './app/components/navigation/AuthNavigation';
import NavigationTheme from './app/components/navigation/NavigationTheme';
import OfflineNotice from './app/components/OfflineNotice';

const App = () => {
  const [user, setUser] = useState();
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
