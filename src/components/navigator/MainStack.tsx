import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from '../others/Navbar';
import DashboardScreen from '../../Screens/DashboardScreen';
import LoginScreen from '../../Screens/LoginScreen';
import MapScreen from '../../Screens/Map copy';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen
                    name="Dashboard"
                    component={DashboardScreen}
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
            <Navbar />
        </>
    )
}

export default MainStack