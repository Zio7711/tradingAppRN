// import { useDimensions } from '@react-native-community/hooks';
// import { StatusBar } from 'expo-status-bar';
// import ViewImageScreen from './app/screens/ViewImageScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

const App = () => {
  return <ViewImageScreen />;
};

export default App;
