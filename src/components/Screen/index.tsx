import React, { ReactNode } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { styles } from './styled';

interface ScreenProps {
  children: ReactNode;
  noPaddingTop?: boolean;
}

const Screen = ({ children, noPaddingTop = false }: ScreenProps) => {
  // Преобразуем children в массив для FlatList
  const data = React.Children.toArray(children);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={data}
        renderItem={({ item }) => <View>{item}</View>}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={[styles.container, noPaddingTop && { paddingTop: 0 }]}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Screen;
