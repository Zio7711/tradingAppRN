// import { useDimensions } from '@react-native-community/hooks';
// import { StatusBar } from 'expo-status-bar';
// import ViewImageScreen from './app/screens/ViewImageScreen';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';

import MessagesScreen from './app/screens/MessagesScreen';

const App = () => {
  return (
    <Screen>
      <ListItem
        title="My title"
        // subTitle="My subTitle"
        ImageComponent={
          <Icon
            name="email"
            size={50}
            backgroundColor="red"
            iconColor="white"
          />
        }
      />
    </Screen>
  );
};

export default App;
