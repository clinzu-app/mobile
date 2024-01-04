import React, { useState } from 'react'
import { Pressable } from '../native'

export default function Toggle({
    children,
    className,
    activeStyle = '',
    selected,
    ...props
}: any) {

    const [select, setSelect] = useState(selected);

    function onPressHandler() {
        console.log('Toggle pressed');
        setSelect(!select)
    }

    return (
        <Pressable
            className={`${className} ${select ? activeStyle : ''}`}
            onPress={onPressHandler}
            {...props} >
            {children}
        </Pressable>
    )
}
