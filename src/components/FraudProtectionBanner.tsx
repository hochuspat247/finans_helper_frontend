import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const FraudProtectionBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Изображение замка */}
      <Image
        source={require('@assets/icons/Снимок экрана 2025-04-05 в 23.15.34 1.png')} // Замените на путь к вашему изображению
        style={styles.lockImage}
      />

      {/* Текст и кнопка */}
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Защитите деньги от мошенников</Text>
        <Text style={styles.descriptionText}>
          Мы компенсируем украденные средства до 300 тыс. рублей
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Защитить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#DCDCDC', // Светло-серый фон
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  lockImage: {
    width: 158, // Настройте размер изображения
    height: 165, // Настройте размер изображения
    marginRight: 5,
  },
  textContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 30,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default FraudProtectionBanner;