import React, { ReactNode } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { styles } from './styled';

interface ScreenProps {
  children: ReactNode;
  noPaddingTop?: boolean;
}

const Screen = ({ children, noPaddingTop = false }: ScreenProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[styles.container, noPaddingTop && { paddingTop: 0 }]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
