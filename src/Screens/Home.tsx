import React from 'react';
import { Text, View } from '../components/native';
import YView from '../components/base/YView';
import Toggle from '../components/base/Toggle';

export default function HomeScreen() {

    return (
        // <YView className='flex-1 bg-lime-300 480:bg-slate-500'>

        //     <View className='px-2w mt-2w hidden'>

        //         <View className='flex-row justify-between'>
        //             <View className='aspect-square w-40 bg-gray-600 rounded-full'></View>

        //             <View className='flex-row justify-center items-center'>
        //                 <Text className='bg-gray-400'>Home Mode</Text>
        //             </View>

        //             <View className='flex-row justify-center items-center gap-8'>
        //                 <View className='aspect-square w-30 bg-gray-600'></View>
        //                 <View className='aspect-square w-30 bg-gray-600'></View>
        //             </View>

        //         </View>

        //     </View>

        //     <Toggle
        //         selected={false}
        //         className='aspect-square bg-red-500 w-100  m-80 p-4 '
        //         activeClassName='bg-green-500'
        //         nestedActiveClassName='text-white'
        //         onPress={() => console.log('clg from home')}
        //     >
        //         <Text className='text-red-500'>This is Toggle</Text>
        //     </Toggle>


        //     <Toggle
        //         selected={false}
        //         className='aspect-square bg-red-500 w-100  m-80 p-4 '
        //         activeClassName='bg-green-500'
        //         nestedActiveClassName='text-white'
        //         toggleType='pressed'
        //         onPress={() => console.log('clg from home')}
        //     >
        //         <Text className='text-red-500'>This is Toggle</Text>
        //     </Toggle>

        // </YView>
        <View className="flex-1 justify-center items-center bg-slate-100">
            <View className="w-lg h-lg bg-red-800"></View>
            <View className="w-10 h-lg bg-red-400"></View>
        </View>
    );
}
