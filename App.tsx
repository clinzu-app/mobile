import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/components/navigator/MainStack';

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}