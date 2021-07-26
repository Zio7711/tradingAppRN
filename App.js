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
import LoginScreen from './app/screens/LoginScreen';

import MessagesScreen from './app/screens/MessagesScreen';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

const App = () => {
  const [category, setCategory] = useState(categories[0]);
  return <LoginScreen />;
};

export default App;
