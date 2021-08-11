import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Button from '../components/AppButton';

import Card from '../components/Card';
import client from '../api/client';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../components/navigation/routes';
import listingsApi from '../api/listings';
import { useState } from 'react';
import AppText from '../components/AppText/AppText';

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);

  const [error, setError] = useState(false);

  const loadListings = async () => {
    // const response = await listingsApi.getListings;
    client
      .get('/listings')
      .then((res) => {
        setListings(res.data);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText> Coould not retreive the listings.</AppText>
          <Button title="Retry" onPress={loadListings}></Button>
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
