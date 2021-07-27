import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListEditScreen from '../../screens/ListEditScreen';
import AccountScreen from '../../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="ListingEdit" component={ListEditScreen} />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
