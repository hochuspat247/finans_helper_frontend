import AddButton from '@components/AddButton';
import CategoryDescriptionInput from '@components/CategoryDescriptionInput';
import IconSelector from '@components/IconSelector';
import LimitInput from '@components/LimitInput';
import StyledInput from '@components/StyledInput';
import UserSelector from '@components/UserSelector';
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryForm: React.FC = () => {
  const [text, setText] = useState('');
  const [limit, setLimit] = useState('4000');
  const navigation = useNavigation(); // Хук для доступа к навигации

  // Функция для перехода на ScreenCategoryList
  const handleAddPress = () => {
    navigation.navigate('ScreenCategoryList');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <IconSelector />
        <View style={{ paddingHorizontal: 16 }}>
          <StyledInput value={text} onChangeText={setText} />
        </View>
        <CategoryDescriptionInput />
        <UserSelector />
        <View style={{ paddingHorizontal: 16 }}>
          <LimitInput value={limit} onChangeText={setLimit} />
        </View>
        {/* Передаём onPress в AddButton */}
        <View style={{ paddingHorizontal: 16, marginTop: 32 }}>
          <AddButton onPress={handleAddPress} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingBottom: 16,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default CategoryForm;