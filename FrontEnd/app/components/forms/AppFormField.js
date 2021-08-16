import { useFormikContext } from 'formik';
import React from 'react';
import AppTextInput from '../AppText/AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
