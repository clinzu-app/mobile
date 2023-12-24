import React from 'react';
import { Text as NativeText } from 'react-native';

const Text: React.FC<{
  style?: string;
  children: React.ReactNode;
}> = ({ style, children }) => {
  return (
    <NativeText className={`text-base text-zinc-800 ${style}`}>
      {children}
    </NativeText>
  );
};

export default Text;
