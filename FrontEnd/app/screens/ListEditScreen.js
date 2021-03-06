import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import listingApi from '../api/listings';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
});

const categories = [
  {
    label: 'Furniture',
    value: 1,
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
  },
  {
    label: 'Clothing',
    value: 5,
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
  },
  { label: 'Camera', value: 3, backgroundColor: '#fed330', icon: 'camera' },
  { label: 'Cars', value: 4, backgroundColor: '#fd9644', icon: 'car' },
  {
    label: 'Games',
    value: 5,
    backgroundColor: '#26de81',
    icon: 'gamepad-square',
  },
  {
    label: 'Sports',
    value: 6,
    backgroundColor: '#45aaf2',
    icon: 'basketball',
  },
  { label: 'Books', value: 7, backgroundColor: 'purple', icon: 'book' },
  {
    label: 'Movies & Music',
    value: 8,
    backgroundColor: '#4b7bec',
    icon: 'headphones',
  },
  { label: 'Others', value: 9, backgroundColor: 'grey', icon: 'more' },
];

const ListEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    listingApi
      .addListing({ ...listing, location }, (progress) => setProgress(progress))
      .then(() => resetForm())
      .catch((err) => {
        setUploadVisible(false);
        console.log('error in Add listing', err);
      });
  };
  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          numberOfColumns={3}
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          multiline
          numberOfLines={3}
          maxLength={255}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default ListEditScreen;
