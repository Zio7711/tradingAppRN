import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Button from '../components/AppButton';
import Card from '../components/Card';
import client from '../api/client';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../components/navigation/routes';
import { useState } from 'react';
import AppText from '../components/AppText/AppText';
import ActivityIndicator from '../components/ActivityIndicator';

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadListings = async () => {
    setLoading(true);
    client
      .get('/listings')
      .then((res) => {
        setListings(res.data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
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
      <ActivityIndicator visible={loading} />

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
