import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText/AppText';
// import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {/* <Progress.Bar progress={Progress} color={colors.primary} width={200} /> */}
        {progress === 1 && (
          <LottieView
            autoPlay
            loop={false}
            style={styles.animation}
            source={require('../assets/animations/done.json')}
            onAnimationFinish={onDone}
          />
        )}
        <AppText> {progress * 100} %</AppText>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default UploadScreen;
