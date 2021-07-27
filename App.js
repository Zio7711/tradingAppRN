import React, { useEffect, useState } from 'react';
import Screen from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput';

const App = () => {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('You need to enable permimssion to access the library!');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };
  return (
    <Screen>
      <ImageInput
        onChangeImage={(uri) => setImageUri(uri)}
        imageUri={imageUri}
      />
    </Screen>
  );
};

export default App;
