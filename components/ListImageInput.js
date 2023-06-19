import React, { useRef } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import AppImageLibraryInput from './AppImageLibraryInput';

function ListImageInput({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef();
    return (
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map(uri =>
                        <View style={styles.image} key={uri}>
                            <AppImageLibraryInput

                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)} />
                        </View>
                    )}
                    <AppImageLibraryInput onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 5
    },
    image: {
        marginRight: 10
    }

})
export default ListImageInput;
