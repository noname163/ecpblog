import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, TextInput, Button } from 'react-native';
import AppScreen from '../components/AppScreen';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import AppImageLibraryInput from '../components/AppImageLibraryInput';
import ListImageInput from '../components/ListImageInput';

function CreateProductScreen(props) {
    const [imageUri, setImageUri] = useState("");
    const [imageUris, setImageUris] = useState([]);
    const handleAdd = uri => {
        setImageUris([...imageUris, uri]);
    }
    const handleRemove = uri => {
        setImageUris(imageUris.filter((imageUri) => imageUri !== uri))
    }
    return (
        <AppScreen>
            {/* <AppImageLibraryInput
                imageUri={imageUri}
                onChangeImage={setImageUri}
            /> */}
            <ListImageInput
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    // Your styles here
});

export default CreateProductScreen;
