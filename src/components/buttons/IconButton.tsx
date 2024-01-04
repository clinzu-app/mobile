import React from 'react';
import { View } from 'react-native';
import Text from '../native/Text';

const IconButton: React.FC<{
    text: string;
}> = ({ text }) => {
    return (
        <View className={`flex-row py-2 items-center rounded-none bg-slate-400 px-2`}>
            <View className="mr-2 aspect-square w-8 rounded-none bg-slate-100"></View>
            <Text style="capitalize text-slate-100 mr-1 text-sm">{text}</Text>
        </View>
    );
};

export default IconButton;
