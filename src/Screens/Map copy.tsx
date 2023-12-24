import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export default function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 33.9692189,
    longitude: -6.8572628,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

  // Check and Enable Location
  async function checkAndEnableLocation() {
    try {
      const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log(result);

      if (result === RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
        Alert.alert(
          'Permission Denied',
          'Please enable location permissions to use this feature.',
        );
      }
    } catch (error) {
      console.log('error');
    }
  }

  const getUserLocation = () => {
    console.log('getUserLocation');
    checkAndEnableLocation();
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={region}
        zoomEnabled
        zoomControlEnabled={false}
        loadingEnabled={false}></MapView>
      <TouchableOpacity style={styles.button} onPress={getUserLocation}>
        <Text>Get My Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
});
