import React, { useState } from 'react'
import { View, Text, Pressable } from '../../components/native';
import UserCard from './UserCard';
import Toggle from '../../components/base/Toggle';
import LogoIcon from './svg/LogoIcon';


export default function LeftNavbar() {

    const [selected, setSelected] = useState(0)
    return (
        <View className='w-330 py-20 gap-20 justify-between border-1 border-red-500'>

            <View className='pl-20 mb-5'>
                <LogoIcon />
            </View>

            <View className='gap-10 flex-1'>

                <Pressable
                    className={`flex-row items-center rounded-10 px-20 py-15 gap-15 ${selected === 0 ? 'bg-bzzr-300' : ''}`}
                    onPress={() => setSelected(0)}
                >
                    <View
                        className={`aspect-square w-30 ${selected === 0 ? 'bg-white' : 'bg-bzzr-100'}`}></View>
                    <Text className={`text-20 ${selected === 0 ? 'text-white' : 'text-bzzr-100'}`}>Home</Text>
                </Pressable>

                <Pressable
                    className={`flex-row items-center rounded-10 px-20 py-15 gap-15 ${selected === 1 ? 'bg-bzzr-300' : ''}`}
                    onPress={() => setSelected(1)}
                >
                    <View
                        className={`aspect-square w-30 ${selected === 1 ? 'bg-white' : 'bg-bzzr-100'}`}></View>
                    <Text className={`text-20 ${selected === 1 ? 'text-white' : 'text-bzzr-100'}`}>Discover</Text>
                </Pressable>



                <Pressable
                    className={`flex-row items-center rounded-10 px-20 py-15 gap-15 ${selected === 2 ? 'bg-bzzr-300' : ''}`}
                    onPress={() => setSelected(2)}
                >
                    <View
                        className={`aspect-square w-30 ${selected === 2 ? 'bg-white' : 'bg-bzzr-100'}`}></View>
                    <Text className={`text-20 ${selected === 2 ? 'text-white' : 'text-bzzr-100'}`}>Subscriptions</Text>
                </Pressable>


                <Pressable
                    className={`flex-row items-center rounded-10 px-20 py-15 gap-15 ${selected === 3 ? 'bg-bzzr-300' : ''}`}
                    onPress={() => setSelected(3)}
                >
                    <View
                        className={`aspect-square w-30 ${selected === 3 ? 'bg-white' : 'bg-bzzr-100'}`}></View>
                    <Text className={`text-20 ${selected === 3 ? 'text-white' : 'text-bzzr-100'}`}>Settings</Text>
                </Pressable>

            </View>

            <View className='flex-row items-center justify-between gap-10'>
                <UserCard size='sm' />

                <View className='flex-row gap-5'>
                    <View className='aspect-square w-5 bg-white rounded-999'></View>
                    <View className='aspect-square w-5 bg-white rounded-999'></View>
                    <View className='aspect-square w-5 bg-white rounded-999'></View>
                </View>
            </View>

        </View>
    );
}
