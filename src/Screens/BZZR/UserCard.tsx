import React from 'react'
import { Text, View } from '../../components/native'

export default function UserCard({ size }: any) {
    return (
        <View className={`flex-row items-center ${sizes[size].gap.column}`}>
            <View className={`relative aspect-square ${sizes[size].img.width}`}>
                <View className={`absolute right-0 bottom-0 w-95% h-95%  bg-bzzr-10 ${sizes[size].img.rounded}`}></View>
                <View className={`absolute left-0 top-0 w-95% h-95%  bg-slate-600 ${sizes[size].img.rounded}`}></View>
            </View>
            <View className={`${sizes[size].gap.row}`}>
                <Text className={`text-white ${sizes[size].name.size}`}>Ray Lewis</Text>
                <Text className={`text-bzzr-100 ${sizes[size].userName.size}`}>@raylewis </Text>
            </View>
        </View>
    )
}

const sizes: any = {
    lg: {
        img: {
            width: 'w-60',
            rounded: 'rounded-6'
        },
        name: {
            size: 'text-22',
            weight: '400'
        },
        userName: {
            size: 'text-16',
            weight: '400'
        },
        gap: {
            row: 'gap-1.5',
            column: 'gap-15'
        },
    },
    md: {
        img: {
            width: 'w-50',
            rounded: 'rounded-6'
        },
        name: {
            size: 'text-20',
            weight: '400'
        },
        userName: {
            size: 'text-18',
            weight: '400'
        },
        gap: {
            row: 'gap-1.5',
            column: 'gap-13'
        },
    },
    sm: {
        img: {
            width: 'w-45',
            rounded: 'rounded-6'
        },
        name: {
            size: 'text-18',
            weight: '400'
        },
        userName: {
            size: 'text-16',
            weight: '400'
        },
        gap: {
            row: 'gap-1',
            column: 'gap-10'
        },
    }
}
