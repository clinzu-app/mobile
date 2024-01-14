import React from 'react'
import { ScrollView, Text, View } from '../components/native'
import YView from '../components/base/YView'

export default function TestScreen() {
    return (
        <View className='flex-1 bg-cyan-500'>
            <View className='flex-row self-center flex-1 gap-20'>
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
        <View className='flex-1 bg-white px-15 pt-20 w-full' style={{ maxWidth: 600 }}>
            <YView className='gap-10 flex-1 bg-slate-300'>
                <View className='aspect-square w-full bg-slate-400 mb-20'></View>
                <View className='aspect-square w-full bg-slate-400 mb-20'></View>
                <View className='aspect-square w-full bg-slate-400 mb-20'></View>
                <View className='aspect-square w-full bg-slate-400 mb-20'></View>
                <View className='aspect-square w-full bg-slate-400 mb-20'></View>
            </YView>
        </View>
    );
};

const RightBar = () => {
    return (
        <View className='w-300 bg-slate-100 px-15 py-20 gap-20 1200:hidden'>
            {/* Your right bar content goes here (profile suggestions) */}
            < Text className='text-22' > Descover</Text >
            <View className='gap-10 flex-1 bg-slate-300'>

                <View className='flex-row items-center bg-slate-400 px-25 py-15 gap-10'>
                    <View className='aspect-square w-40 bg-slate-500 rounded-999'></View>
                    <View>
                        <Text className='text-16'>firstName</Text>
                        <Text className='text-16'>lastName</Text>
                    </View>
                </View>

                <View className='flex-row items-center bg-slate-400 px-25 py-15 gap-10'>
                    <View className='aspect-square w-40 bg-slate-500 rounded-999'></View>
                    <View>
                        <Text className='text-16'>firstName</Text>
                        <Text className='text-16'>lastName</Text>
                    </View>
                </View>

                <View className='flex-row items-center bg-slate-400 px-25 py-15 gap-10'>
                    <View className='aspect-square w-40 bg-slate-500 rounded-999'></View>
                    <View>
                        <Text className='text-16'>firstName</Text>
                        <Text className='text-16'>lastName</Text>
                    </View>
                </View>

                <View className='flex-row items-center bg-slate-400 px-25 py-15 gap-10'>
                    <View className='aspect-square w-40 bg-slate-500 rounded-999'></View>
                    <View>
                        <Text className='text-16'>firstName</Text>
                        <Text className='text-16'>lastName</Text>
                    </View>
                </View>

                <View className='flex-row items-center bg-slate-400 px-25 py-15 gap-10'>
                    <View className='aspect-square w-40 bg-slate-500 rounded-999'></View>
                    <View>
                        <Text className='text-16'>firstName</Text>
                        <Text className='text-16'>lastName</Text>
                    </View>
                </View>

                <Text className='text-16 self-center'>Load More</Text>

            </View>
        </View >
    );
};

const LeftNavbar = () => {
    return (
        <View className='w-300 bg-slate-100 px-15 py-20 gap-20 justify-between 980:w-auto 730:hidden'>

            <View className='bg-slate-400 px-25 py-15'>
                <Text className='text-30'>Logo</Text>
            </View>

            <View className='gap-10 flex-1 bg-slate-300'>

                <View className='flex-row items-center bg-slate-400 px-25 py-15 gap-10 870:justify-center'>
                    <View className='aspect-square w-30 bg-slate-500 rounded-999'></View>
                    <Text className='text-16 870:hidden'>Menu Item</Text>
                </View>

                <View className='flex-row items-center bg-slate-400 px-25 py-15 gap-10 870:justify-center'>
                    <View className='aspect-square w-30 bg-slate-500 rounded-999'></View>
                    <Text className='text-16 870:hidden'>Menu Item</Text>
                </View>

                <View className='flex-row items-center bg-slate-400 px-25 py-15 gap-10 870:justify-center'>
                    <View className='aspect-square w-30 bg-slate-500 rounded-999'></View>
                    <Text className='text-16 870:hidden'>Menu Item</Text>
                </View>

            </View>


            <View className='flex-row items-center bg-slate-400 px-25 py-15 gap-10 justify-between'>
                <View className='flex-row gap-10 items-center'>
                    <View className='aspect-square w-40 bg-slate-500 rounded-999'></View>
                    <View className='870:hidden'>
                        <Text className='text-16'>firstName</Text>
                        <Text className='text-16'>lastName</Text>
                    </View>
                </View>
                <View className='gap-5'>
                    <View className='aspect-square w-5 bg-slate-500 rounded-999'></View>
                    <View className='aspect-square w-5 bg-slate-500 rounded-999'></View>
                    <View className='aspect-square w-5 bg-slate-500 rounded-999'></View>
                </View>
            </View>

        </View>
    );
};
