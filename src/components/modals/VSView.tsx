import React from 'react';
import { ScrollView } from 'react-native';

const VSView: React.FC<{
  style?: string;
  children: React.ReactNode;
}> = ({ style, children }) => {
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      className={`flex-1 ${style}`}>
      {children}
    </ScrollView>
  );
};

export default VSView;
