import React from 'react'
import { ScrollView } from '../native'

export default function YView({ children, ...props }: any) {
    return (
        <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            {...props}
        >
            {children}
        </ScrollView>
    )
}

