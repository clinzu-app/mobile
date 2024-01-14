import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../components/Common/Navbar';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import MapScreen from '../screens/Map copy';
import TestScreen from '../screens/Test';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <>
            <Stack.Navigator initialRouteName="Test">
                <Stack.Screen
                    name="Test"
                    component={TestScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Map"
                    component={MapScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
            {/* <Navbar /> */}
        </>
    );
};