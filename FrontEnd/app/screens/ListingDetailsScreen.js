import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Zio Tan"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
