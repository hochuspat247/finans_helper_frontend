import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PulseCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.textBlock}>
        <Text style={styles.subtitle}>Позаботьтесь о финансах</Text>
        <Text style={styles.title}>Пульс</Text>
      </View>
      <Image
        source={require('@assets/icons/IMG_8551 1.png')} // замени на свою иконку
        style={styles.heart}
      />
      <Image
        source={require('@assets/icons/Ellipse 478.png')} // замени на свою иконку
        style={styles.heartBackground}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#5FE274', // var(--Green)
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 120,
    width: '90%', // Уменьшаем ширину, чтобы были отступы
    alignSelf: 'center', // Центрируем карточку
    overflow: 'hidden',
    marginHorizontal: 16, // Добавляем горизонтальные отступы
  },
  textBlock: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.64)',
    fontFamily: 'SFPro',
    fontWeight: '500',
  },
  title: {
    fontSize: 28,
    color: '#FFF',
    fontFamily: 'SFPro',
    fontWeight: '700',
    marginTop: 4,
  },
  heart: {
    zIndex: 2,
    width: 125,
    height: 125,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    bottom: -12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  heartBackground: {
    zIndex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default PulseCard;