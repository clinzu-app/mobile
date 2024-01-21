import React from 'react'
import { Text, View } from '../../components/native'
import YView from '../../components/base/YView'
import LeftNavbar from './LeftNavbar';
import UserCard from './UserCard';
import XView from '../../components/base/XView';
// style={{ borderRadius: '10%' }}
export default function TestScreen() {
    const handleLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        console.log('Width of theView:', width);
    };
    return (
        <View onLayout={handleLayout} className='flex-1 bg-bzzr-900'>
            <View className='flex-row self-center flex-1 px-20 overfow-hidden'>
                <LeftNavbar />
                <FeedContainer />
                <RightBar />
            </View>
            <View className='hidden flex-row  gap-10 justify-around items-center absolute bottom-0 left-0 h-70 bg-slate-800 w-full 730:flex'>
                <View className='aspect-square w-40 bg-slate-500 rounded-10'></View>
                <View className='aspect-square w-40 bg-slate-500 rounded-10'></View>
                <View className='aspect-square w-40 bg-slate-500 rounded-10'></View>
                <View className='aspect-square w-40 bg-slate-500 rounded-10'></View>
                <View className='aspect-square w-40 bg-slate-500 rounded-10'></View>
            </View>
        </View>
    )
}

const FeedContainer = () => {
    return (
        <YView className='flex-1'>

            <View className='pt-40 gap-40 px-60'>

                {/* Lives */}
                <View className='h-400 w-full flex-row gap-40'>
                    <View className='justify-center'>
                        <View className='aspect-square w-20  bg-white'></View>
                    </View>
                    <View className='flex-1 relative justify-center'>
                        <View className='absolute bg-slate-900 w-60% h-80% self-end rounded-18'></View>
                        <View className='absolute bg-slate-800 w-60% h-80% self-start rounded-18'></View>
                        <View className='absolute bg-slate-700 w-80% h-full self-center rounded-18'></View>
                    </View>
                    <View className='justify-center'>
                        <View className='aspect-square w-20  bg-white'></View>
                    </View>
                </View>

                {/* Categories */}
                <View className='gap-20'>
                    <View className='flex-row justify-between items-end'>
                        <Text className='text-30 text-white'>CATEGORIES</Text>
                        <Text className='text-18 text-white'>See more</Text>
                    </View>
                    <XView>
                        <View className='flex-row gap-12'>

                            <View className='w-200'>
                                <View className='h-250 bg-slate-500'></View>
                                <Text className='text-18 text-white'>FOOTBALL</Text>
                                <Text className='text-16 text-bzzr-100'>27 athletes</Text>
                            </View>

                            <View className='w-200'>
                                <View className='h-250 bg-slate-500'></View>
                                <Text className='text-18 text-white'>FOOTBALL</Text>
                                <Text className='text-16 text-bzzr-100'>27 athletes</Text>
                            </View>

                            <View className='w-200'>
                                <View className='h-250 bg-slate-500'></View>
                                <Text className='text-18 text-white'>FOOTBALL</Text>
                                <Text className='text-16 text-bzzr-100'>27 athletes</Text>
                            </View>

                            <View className='w-200'>
                                <View className='h-250 bg-slate-500'></View>
                                <Text className='text-18 text-white'>FOOTBALL</Text>
                                <Text className='text-16 text-bzzr-100'>27 athletes</Text>
                            </View>

                            <View className='w-200'>
                                <View className='h-250 bg-slate-500'></View>
                                <Text className='text-18 text-white'>FOOTBALL</Text>
                                <Text className='text-16 text-bzzr-100'>27 athletes</Text>
                            </View>

                            <View className='w-200'>
                                <View className='h-250 bg-slate-500'></View>
                                <Text className='text-18 text-white'>FOOTBALL</Text>
                                <Text className='text-16 text-bzzr-100'>27 athletes</Text>
                            </View>

                        </View>
                    </XView>
                </View>

                {/* Postes */}
                <View className='w-full bg-slate-900 mb-20 border-1 border-blue-700 rounded-18 mb-100'>
                    <View className='p-30 flex-row justify-between'>
                        <UserCard size='lg' />
                        <View>
                            <Text className='text-bzzr-100 text-16'>1 hour ago</Text>
                        </View>
                    </View>
                    <View className='h-500 bg-green-100'></View>
                    <View className='p-30 flex-row justify-between'>
                        <View className='flex-row gap-10'>
                            <Text className='text-bzzr-100 text-16'>like</Text>
                            <Text className='text-bzzr-100 text-16'>comm</Text>
                        </View>
                        <Text className='text-bzzr-100 text-16'>save</Text>
                    </View>
                </View>

            </View>

        </YView>
    );
};

const RightBar = () => {
    return (
        <View className='w-390 pt-40 gap-30 border-1 border-blue-500'>

            <View className='py-15 px-20 bg-white justify-center rounded-8'>
                < Text className='text-20 text-bzzr-100' >Search</Text >
            </View>

            < Text className='text-30 text-white' >TRENDING</Text >

            <YView className=' flex-1'>
                <View className='gap-40'>
                    <UserCard size='md' />
                    <UserCard size='md' />
                    <UserCard size='md' />
                    <UserCard size='md' />
                    <UserCard size='md' />
                </View>
            </YView>

        </View >
    );
};