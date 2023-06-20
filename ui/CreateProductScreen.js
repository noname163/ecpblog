import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppScreen from '../components/AppScreen';
import ListImageInput from '../components/image/ListImageInput';
import AppForm from '../components/form/AppForm'
import AppFormImagePicker from './../components/form/AppFormImagePicker';
import AppFormField from './../components/form/AppFormField';
import * as Yup from "yup";
import AppSubmitButton from './../components/button/AppSubmitButton';
import AppPicker from './../components/AppPicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description")
});

function CreateProductScreen() {
    const handleSubmit = (values) =>{
        console.log("submit value ", values)
    }
    return (
        <AppScreen>
            <ScrollView style={styles.container} >
                <View style={{width:"100%", height:"100%"}}>
                    <AppForm
                        initialValues={{
                            images: [],
                            price: "",
                            description:""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        <AppFormImagePicker name="images" />
                        <AppFormField maxLength={255} name="title" placeholder="Title" />
                        <AppFormField
                            keyboardType="numeric"
                            maxLength={8}
                            name="price"
                            placeholder="Price"
                        />
                        <AppFormField
                            maxLength={255}
                            multiline
                            name="description"
                            numberOfLines={3}
                            placeholder="Description"
                        />
                        <AppSubmitButton title={"Create"} />
                    </AppForm>
                </View>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        marginLeft:30
    }
});

export default CreateProductScreen;