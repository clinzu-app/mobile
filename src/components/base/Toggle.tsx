import React, { useState } from 'react';
import { Pressable } from '../native';

export default function Toggle({
    children,
    className,
    activeClassName,
    nestedActiveClassName,
    selected,
    onPress,
    toggleType,
    ...props
}: any) {
    const [isSelected, setIsSelected] = useState(selected);

    const onPressHandler = () => {
        if (onPress) {
            setIsSelected(!isSelected);
            onPress();
        }
    };

    const onPressInHandler = () => {
        if (toggleType === 'pressed') {
            setIsSelected(true);
        }
    };

    const onPressOutHandler = () => {
        if (toggleType === 'pressed') {
            setIsSelected(false);
        }
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            className: `${isSelected ? nestedActiveClassName : ''}`,
        });
    });

    return (
        <Pressable
            className={`${className} ${isSelected ? activeClassName : ''}`}
            onPress={onPressHandler}
            onPressIn={onPressInHandler}
            onPressOut={onPressOutHandler}
            {...props}
        >
            {childrenWithProps}
        </Pressable>
    );
}
