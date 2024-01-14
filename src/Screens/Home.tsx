import React from 'react';
import { Text, View } from '../components/native';
import YView from '../components/base/YView';
import Toggle from '../components/base/Toggle';

export default function HomeScreen() {

    return (

        <View className='flex-1 bg-slate-100 items-center'>


            <View className='absolute bottom-10 left-0 w-full px-xs max-w-500'>
                <View className='bg-slate-500 h-50 w-full'></View>
            </View>



            {/*
            <Toggle
                selected={false}
                className='aspect-square bg-red-500 w-100 p-4'
                activeClassName='bg-red-900'
                nestedActiveClassName='text-white'
                onPress={() => { }}
            >
                <Text className='text-red-500'>This is Toggle</Text>
            </Toggle>

            <Text className='text-40'>This is Text 40</Text>
            <View className='w-40% h-33 bg-red-500'></View> 
            */}

        </View>
    );
}
