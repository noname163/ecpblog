import React from 'react';
import { useFormikContext } from "formik";
import AppTextInput from './../text/AppTextInput';
import AppErrorMessage from '../AppErrorMessage';

function AppFormField({ name, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;