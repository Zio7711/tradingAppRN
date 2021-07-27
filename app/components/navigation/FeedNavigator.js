import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ListingDetailsScreen from '../../screens/ListingDetailsScreen';
import ListingsScreen from '../../screens/ListingsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;