import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Map() {
  const [region, setRegion] = useState({
    latitude: 33.9692189,
    longitude: -6.8572628,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={region}
        zoomEnabled
        zoomControlEnabled={false}
        loadingEnabled={false}></MapView>
      <Button
        title="Go to Login"
        // onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
