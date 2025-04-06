import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EmptyCategoryCard: React.FC = () => {
  const navigation = useNavigation(); // Хук для доступа к навигации

  // Функция для перехода на CategoryForm
  const handleCreatePress = () => {
    navigation.navigate('CategoryForm');
  };

  return (
    <View style={styles.cardCont}>
      <View style={styles.card}>
        {/* Изображение сверху со смещением */}
        <Image
          source={require('@assets/icons/image 239.png')} // ← Замени на свой путь
          style={styles.image}
          resizeMode="contain"
        />

        {/* Заголовок и текст */}
        <Text style={styles.title}>Тут пусто</Text>
        <Text style={styles.subtitle}>Создайте свою первую категорию</Text>

        {/* Кнопка с переходом */}
        <TouchableOpacity style={styles.button} onPress={handleCreatePress}>
          <Text style={styles.buttonText}>＋ Создать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardCont: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 41,
    backgroundColor: '#FFF',
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  image: {
    width: 140,
    height: 140,
    marginTop: -70, // смещение вверх
    marginBottom: -10,
  },
  title: {
    color: '#000',
    fontFamily: 'SF Pro Display',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#9B9B9B',
    fontFamily: 'SF Pro Display',
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#1C1B1B',
    borderRadius: 61,
    paddingHorizontal: 32,
    paddingVertical: 20,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Manrope',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -0.041,
  },
});

export default EmptyCategoryCard;