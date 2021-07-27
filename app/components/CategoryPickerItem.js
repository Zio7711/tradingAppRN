import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText/AppText';
import Icon from './Icon';

const CategoryPickerItem = ({ onPress, item }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '33%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
  },

  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
export default CategoryPickerItem;
