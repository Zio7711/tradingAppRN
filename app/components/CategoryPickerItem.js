import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from './AppText/AppText';
import Icon from './Icon';

const CategoryPickerItem = ({ onPress, item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '33%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
export default CategoryPickerItem;
