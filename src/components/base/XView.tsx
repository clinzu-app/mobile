import React from 'react'
import { ScrollView } from '../native'

export default function XView({ children, ...props }: any) {
    return (
        <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, paddingHorizontal: '3%' }}
            {...props}
        >
            {children}
        </ScrollView>
    )
}
