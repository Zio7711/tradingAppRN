import React, { useEffect, useState } from 'react';
import Screen from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

const App = () => {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        onAddImage={handleAdd}
        imageUris={imageUris}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
};

export default App;
