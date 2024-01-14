import React from 'react';
import {
    Text as NativeText,
    View as NativeView,
    ScrollView as NativeScrollView,
    Button as NativeButton,
    Pressable as NativePressable,
    Image as NativeImage,
} from 'react-native';
import StyleParser from '../assets/styles/styleParser';

function styleInjector(Component: any) {
    return ({ style, className, children, ...props }: any) => {
        const styles = className ? StyleParser(className) : {};
        return (
            <Component style={[styles, style]} {...props}>
                {children}
            </Component>
        );
    };
}

const Text = styleInjector(NativeText);
const View = styleInjector(NativeView);
const ScrollView = styleInjector(NativeScrollView);
const Button = styleInjector(NativeButton);
const Pressable = styleInjector(NativePressable);
const Image = styleInjector(NativeImage);

export {
    Text,
    View,
    ScrollView,
    Button,
    Pressable,
    Image,
};
