import React from 'react';
import { ScrollView, View } from 'react-native';
import Text from '../native/Text';
import HSView from './HSView';

const HSHeader: React.FC<{
  headerTitle?: string;
  headerButton?: string;
  children: React.ReactNode;
}> = ({ headerTitle, headerButton, children }) => {
  return (
    <View>
      <View className="mx-[5%] mb-4 flex-row items-center justify-between">
        <Text>{headerTitle}</Text>
        <Text style="text-xs text-slate-800">{headerButton}</Text>
      </View>
      <HSView>{children}</HSView>
    </View>
  );
};

export default HSHeader;
