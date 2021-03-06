import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

const AppFormPicker = ({
  items,
  name,
  placeholder,
  width,
  numberOfColumns,
  PickerItemComponent,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        numberOfColumns={numberOfColumns}
        width={width}
        items={items}
        PickerItemComponent={PickerItemComponent}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
