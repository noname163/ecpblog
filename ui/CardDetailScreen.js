import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppScreen from '../components/AppScreen';
import colors from '../config/colors';

import AppText from '../components/text/AppText';
import ListItem from './../components/list/ListItem';
import Favorite from '../components/icons/Favorite';

function CardDetailScreen({ route }) {
  const data = route.params.item;
  return (
    <AppScreen>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.image }} />
        <View style={styles.detailsContainer}>
          <View style={styles.headerContainer}>
            <AppText style={styles.title}>{data.title}</AppText>
            <Favorite isFavorite={data.favorite} size={30} />
          </View>
          <AppText style={styles.price}>{data.subtitle}</AppText>
          <AppText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </AppText>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderColor:colors.while,
    borderWidth:5,
    aspectRatio: 5/3
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '500',
    marginRight: 10,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
});

export default CardDetailScreen;
