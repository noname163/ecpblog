import AsyncStorage from '@react-native-async-storage/async-storage';

const data = {
    itemDataset: [
        {
            id: 1,
            image: "https://lanhodiep.vn/wp-content/uploads/2018/02/chau-ho-diep-vang-mong-mo.jpg",
            title: "Something to exchange 1",
            subtitle: "Clothing",
            favorite: false
        },
        {
            id: 2,
            image: "https://lanhodiep.vn/wp-content/uploads/2018/02/chau-ho-diep-vang-mong-mo.jpg",
            title: "Something to exchange 2",
            subtitle: "Clothing",
            favorite: false
        },
        {
            id: 3,
            image: "https://lanhodiep.vn/wp-content/uploads/2018/02/chau-ho-diep-vang-mong-mo.jpg",
            title: "Something to exchange 5",
            subtitle: "Furniture",
            favorite: false
        }
    ],
    categories: [
        { label: "All", value: "all" },
        { label: "Furniture", value: "Furniture" },
        { label: "Clothing", value: "Clothing" },
        { label: "Camera", value: "Camera" },
    ]
};

const storeData = async () => {
    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('myData', jsonValue);
        console.log('Data stored successfully.');
    } catch (error) {
        console.log('Error storing data:', error);
    }
};

const retrieveData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('myData');
        if (jsonValue !== null) {
            const retrievedData = JSON.parse(jsonValue);
            console.log('Data retrieved successfully:', retrievedData);
            return retrievedData;
        } else {
            console.log('No data found.');
            return null;
        }
    } catch (error) {
        console.log('Error retrieving data:', error);
        return null;
    }
};

const updateDataItem = async (updatedItem) => {
    try {
        const jsonValue = await AsyncStorage.getItem('myData');
        console.log("Data update " , updatedItem)
        if (jsonValue !== null) {
            const retrievedData = JSON.parse(jsonValue);
            const updatedDataset = retrievedData.itemDataset.map((item) => {
                if (item.id == updatedItem.id) {
                    console.log("Updating")
                    return { ...item, ...updatedItem };
                }
                return item;
            });
            retrievedData.itemDataset = updatedDataset;
            const updatedJsonValue = JSON.stringify(retrievedData);
            await AsyncStorage.setItem('myData', updatedJsonValue);
            console.log('Data item updated successfully. ', updatedDataset);
        } else {
            console.log('No data found.');
        }
    } catch (error) {
        console.log('Error updating data item:', error);
    }
};

export default {
    storeData,
    retrieveData,
    updateDataItem
};
