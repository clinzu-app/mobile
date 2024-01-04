import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/stacks/Home';


export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    );
}