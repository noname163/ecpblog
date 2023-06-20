import React from 'react';
import ListImageInput from './../image/ListImageInput';
import AppErrorMessage from '../AppErrorMessage';
import { useFormikContext } from 'formik';
import { View, StyleSheet } from 'react-native';

function AppFormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const handleAdd = uri => {
        console.log("On Adding ", uri)
        setFieldValue(name,[...values[name], uri]);
    }
    const handleRemove = uri => {
        console.log("On remove")
        setFieldValue(name, values[name].filter((imageUri) => imageUri !== uri))
    }
    return (
        <View style={styles.cointainer}>
            <ListImageInput
                imageUris={values[name]} 
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
                />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}

const styles = StyleSheet.create({
    cointainer: {
        height:110,
        overflow:'hidden'
    }
})

export default AppFormImagePicker;