import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  value: number;
  style?: ViewStyle;
}

const IncomeBalanceCard: React.FC<Props> = ({ value, style }) => {
  const percentage = 0.5; // значение для прогресс-бара (от 0 до 1)

  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>Остаток доходов</Text>
      <Text style={styles.amount}>+ {value.toLocaleString('ru-RU')} ₽</Text>

      {/* Прогресс-бар */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { flex: percentage }]} />
        <View style={{ flex: 1 - percentage }} />
      </View>

      <Text style={styles.label}>Мастер</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#C4C4C4', // var(--Grey2)
    borderRadius: 20,
    padding: 16,
  },
  title: {
    color: '#FFF',
    fontFamily: 'SF Pro Display',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 18,
    marginBottom: 8,
  },
  amount: {
    color: '#FFF',
    fontFamily: 'SF Pro Display',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: undefined,
    marginBottom: 16,
  },
  progressBar: {
    flexDirection: 'row',
    height: 10,
    borderRadius: 6.114,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressFill: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 6.114,
    borderBottomLeftRadius: 6.114,
  },
  label: {
    color: 'rgba(255, 255, 255, 0.64)',
    fontFamily: 'SF Pro Display',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14,
  },
});

export default IncomeBalanceCard;
