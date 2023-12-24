import React from 'react';
import { ScrollView } from 'react-native';

const HSView: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ScrollView
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 8, paddingHorizontal: '3%' }}>
      {children}
    </ScrollView>
  );
};

export default HSView;
