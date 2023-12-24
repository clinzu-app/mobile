import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function Navbar() {
  const navbarData = [
    { label: 'Dashboard', route: 'Dashboard' },
    { label: 'Map', route: 'Map' },
    { label: 'AR', route: 'AR' },
    { label: 'Tickets', route: 'Tickets' },
    { label: 'Account', route: 'Account' },
  ];

  // const handleNavigation = (route) => {
  //     navigation.navigate(route);
  // };

  const navbarItems = navbarData.map((item, index) => (
    <Pressable
      key={index}
      className="flex aspect-square flex-1 items-center justify-center bg-blue-600">
      <Text className="text-white">{item.label}</Text>
    </Pressable>
  ));

  return (
    <View className="absolute bottom-0 left-0 flex-row space-x-2 bg-red-500 px-2">
      {navbarItems}
    </View>
  );
}
