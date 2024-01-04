import React, { useState } from 'react';
import { Pressable, Text, View } from '../native';

export default function Navbar() {

    const navbarData = [
        { label: 'Home', route: 'Home' },
        { label: 'Map', route: 'Map' },
        { label: 'AR', route: 'AR' },
        { label: 'Ticket', route: 'Ticket' },
    ];

    function Navitem({ label, onPress, selected }: any) {
        return (
            <Pressable onPress={onPress}>
                <View className={`aspect-square w-35 ${selected ? 'bg-gray-800' : 'bg-gray-500'}`}>
                    {label}
                </View>
            </Pressable>
        )
    }

    const [selectedItem, setSelectedItem] = useState(null);

    const handlePress = (index: any) => {
        setSelectedItem(index);
    };

    const navbarItems = navbarData.map((e, i) => (
        <Navitem
            key={i}
            label={() => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red">
                <path d="M21 16.8292V11.1625C21 10.1189 21 9.5971 20.7169 9.20427C20.4881 8.88694 20.1212 8.71828 19.4667 8.49121C19.3328 10.0974 18.8009 11.7377 17.9655 13.1734C16.9928 14.845 15.5484 16.3395 13.697 17.1472C12.618 17.6179 11.382 17.6179 10.303 17.1472C8.45164 16.3395 7.00718 14.845 6.03449 13.1734C5.40086 12.0844 4.9418 10.8778 4.69862 9.65752C4.31607 9.60117 4.0225 9.63008 3.76917 9.77142C3.66809 9.82781 3.57388 9.89572 3.48841 9.97378C3 10.4199 3 11.2493 3 12.9082V17.8379C3 18.8815 3 19.4033 3.28314 19.7961C3.56627 20.189 4.06129 20.354 5.05132 20.684L5.43488 20.8118L5.43489 20.8118C7.01186 21.3375 7.80035 21.6003 8.60688 21.6018C8.8498 21.6023 9.09242 21.5851 9.33284 21.5503C10.131 21.4347 10.8809 21.0597 12.3806 20.3099C13.5299 19.7352 14.1046 19.4479 14.715 19.3146C14.9292 19.2678 15.1463 19.2352 15.3648 19.2169C15.9875 19.1648 16.6157 19.2695 17.8721 19.4789C19.1455 19.6911 19.7821 19.7972 20.247 19.5303C20.4048 19.4396 20.5449 19.321 20.6603 19.1802C21 18.7655 21 18.1201 21 16.8292Z" fill="#1C274C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.68629 2 6 4.55211 6 7.70031C6 10.8238 7.91499 14.4687 10.9028 15.7721C11.5993 16.076 12.4007 16.076 13.0972 15.7721C16.085 14.4687 18 10.8238 18 7.70031C18 4.55211 15.3137 2 12 2ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z" fill="#1C274C" />
            </svg>)}
            onPress={() => handlePress(i)}
            selected={selectedItem === i}
        />
    ));

    return (
        <View className='w-full absolute bottom-0 left-0 px-2w mb-2w bg-red-400 bg-green-300'>
            <View className='flex-row justify-around gap-8 p-14 bg-gray-400'>
                {navbarItems}
            </View>
        </View>
    );
}
