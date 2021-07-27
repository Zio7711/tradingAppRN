import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingsScreen from '../../screens/ListingsScreen';
import ListEditScreen from '../../screens/ListEditScreen';
import AccountScreen from '../../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listings" component={ListingsScreen} />
      <Tab.Screen name="ListingEdit" component={ListEditScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
