// import { useDimensions } from '@react-native-community/hooks';
// import { StatusBar } from 'expo-status-bar';
// import ViewImageScreen from './app/screens/ViewImageScreen';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppText/AppTextInput';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

import MessagesScreen from './app/screens/MessagesScreen';

const App = () => {
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
};

export default App;
