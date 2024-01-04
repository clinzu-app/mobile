import React from 'react'
import { ScrollView } from '../native'

export default function YView({ children, ...props }: any) {
    return (
        <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            className='flex-1'
            {...props}
        >
            {children}
        </ScrollView>
    )
}

