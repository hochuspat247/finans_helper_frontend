import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PulseHeader: React.FC = () => {
  const navigation = useNavigation(); // Хук для доступа к навигации

  // Функция для возврата на предыдущий экран
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Кнопка "назад" */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Image
          source={require('@assets/icons/icon-park-outline_down (1).png')} // или используйте Text: "<"
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Заголовок */}
      <Text style={styles.title}>Пульс</Text>

      {/* Кнопка "инфо" */}
      <TouchableOpacity style={styles.infoButton}>
        <Image
          source={require('@assets/icons/gg_info.png')} // "i" в кружке
          style={styles.infoIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
    paddingVertical: 12,
  },
  backButton: {
    width: 48,
    height: 48,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 32,
    height: 32,
  },
  title: {
    color: '#FFF',
    fontFamily: 'SF Pro Display',
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  infoButton: {
    width: 48,
    height: 48,
    borderRadius: 40,
    backgroundColor: '#B9D1C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    width: 20,
    height: 20,
  },
});

export default PulseHeader;