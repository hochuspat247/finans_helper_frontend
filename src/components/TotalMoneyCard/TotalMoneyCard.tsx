import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface Props {
  total: number; // число, которое будет отображаться
}

const TotalMoneyCard: React.FC<Props> = ({ total }) => {
  return (
    <View style={styles.container}>
      {/* Иконка сверху */}
      <Image
        source={require('@assets/icons/solar_graph-new-bold.png')}
        style={styles.icon}
      />

      {/* Подпись */}
      <Text style={styles.label}>Денег всего</Text>

      {/* Сумма */}
      <Text style={styles.amount}>
        {total.toLocaleString('ru-RU')} ₽
      </Text>

      {/* Кнопка */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Хорошо</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  label: {
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: -0.96,
    marginBottom: 8,
  },
  amount: {
    color: '#FFF',
    fontFamily: 'SF Pro Display',
    fontSize: 48,
    fontWeight: '700',
    letterSpacing: -1.92,
    textAlign: 'center',
    marginBottom: 25, // ← расстояние между суммой и кнопкой
  },
  button: {
    backgroundColor: 'rgba(185, 209, 193, 0.64)',
    paddingVertical: 4,
    paddingHorizontal: 29,
    borderRadius: 24,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'SF Pro Display',
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: -0.48,
    textAlign: 'center',
  },
});

export default TotalMoneyCard;
