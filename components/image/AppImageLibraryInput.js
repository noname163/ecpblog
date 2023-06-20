import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function AppImageLibraryInput({ imageUri, onChangeImage }) {
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) {
            alert("You need to enable permission to access the library");
        }
    };
    

    useEffect(() => {
        requestPermission();
    }, []);

    const handlePress = () => {
        if (!imageUri) {
            selectImage();
        } else {
            Alert.alert("Delete", "Are you sure you want to delete this image", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" }
            ]);
        }
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.canceled) {
                onChangeImage(result.assets[0].uri);
            }
        } catch (error) {
            console.log("Pick image error:", error);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <Feather name="camera" size={50} color="white" />
                )}
                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9BABB8",
        borderRadius: 7,
        height: 110,
        width: 110,
        justifyContent:"center",
        alignItems:"center",
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default AppImageLibraryInput;
