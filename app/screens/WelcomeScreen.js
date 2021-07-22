import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
      blurRadius={10}
    >
      <View style={styles.logoAndName}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoAndName: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
