import React from 'react';
import { Text, View } from '../components/native';
import YView from '../components/base/YView';
import Toggle from '../components/base/Toggle';

export default function HomeScreen() {

    return (
        <YView className='flex-1 bg-lime-300 480:bg-purple-300'>

            <View className='px-2w mt-2w hidden'>

                <View className='flex-row justify-between'>
                    <View className='aspect-square w-40 bg-gray-600 rounded-full'></View>

                    <View className='flex-row justify-center items-center'>
                        <Text className='bg-gray-400'>Home Mode</Text>
                    </View>

                    <View className='flex-row justify-center items-center gap-8'>
                        <View className='aspect-square w-30 bg-gray-600'></View>
                        <View className='aspect-square w-30 bg-gray-600'></View>
                    </View>

                </View>

            </View>

            <Toggle
                selected={false}
                activeStyle='border-blue-800'
                className='p-4 bg-green-400 w-100 m-80 border-3 border-transparent'
            >
                <Text className='p-4 bg-red-500 text-white'>This is Toggle</Text>
            </Toggle>

        </YView>
    );
}
