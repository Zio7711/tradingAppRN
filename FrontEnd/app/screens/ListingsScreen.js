import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Button from '../components/AppButton';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../components/navigation/routes';
import AppText from '../components/AppText/AppText';
import ActivityIndicator from '../components/ActivityIndicator';
import { useApi } from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {
  const getListingsApi = useApi('/listings');

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText> Could not retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings}></Button>
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />

      <FlatList
        data={getListingsApi.data}
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
