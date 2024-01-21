import React from 'react'
import { ScrollView } from '../native'

export default function XView({ children, ...props }: any) {
    return (
        <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            {...props}
        >
            {children}
        </ScrollView>
    )
}
