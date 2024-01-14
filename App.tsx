import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigations/Home';
import { Text, View } from './src/components/native';
import { Dimensions } from 'react-native';

export default function App(): JSX.Element {

    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

    useEffect(() => {
        const handleDimensionChange = () => {
            setWindowWidth(Dimensions.get('window').width);
        };

        Dimensions.addEventListener('change', handleDimensionChange);

    }, []);

    return (
        <NavigationContainer>
            <HomeStack />
            <View className='px-6 py-3 absolute bg-red-400 bottom-0 right-0'>
                <Text className='text-15'>{windowWidth}</Text>
            </View>
        </NavigationContainer>
    );
}