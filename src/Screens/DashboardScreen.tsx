import React from 'react';
import { ScrollView, View } from 'react-native';
import Text from '../components/native/Text';
import HSHeader from '../components/modals/HSHeader';
import IconButton from '../components/buttons/IconButton';
import VSView from '../components/modals/VSView';

export default function DashboardScreen() {
  return (
    <VSView style="bg-slate-100">
      <Text style="my-12 mx-[5%] text-4xl capitalize">
        Good morning, Taoufik! How are you Today.
      </Text>

      <HSHeader headerTitle="Where are you going?" headerButton="see all">
        <IconButton text="home" />
        <IconButton text="work" />
        <IconButton text="gym" />
        <IconButton text="mall" />
        <IconButton text="home" />
        <IconButton text="work" />
        <IconButton text="gym" />
        <IconButton text="mall" />
      </HSHeader>

      <View className="h-5"></View>

      <HSHeader headerTitle="Favorite" headerButton="see all">
        <View className="h-48 w-80 rounded-xl bg-slate-400"></View>
        <View className="h-48 w-80 rounded-xl bg-slate-400"></View>
      </HSHeader>

      <View className="h-5"></View>

      <HSHeader headerTitle="Favorite" headerButton="see all">
        <View className="h-48 w-80 rounded-xl bg-slate-400"></View>
        <View className="h-48 w-80 rounded-xl bg-slate-400"></View>
      </HSHeader>

      <View className="h-5"></View>

      <HSHeader headerTitle="Favorite" headerButton="see all">
        <View className="h-48 w-80 rounded-xl bg-slate-400"></View>
        <View className="h-48 w-80 rounded-xl bg-slate-400"></View>
      </HSHeader>
    </VSView>
  );
}
