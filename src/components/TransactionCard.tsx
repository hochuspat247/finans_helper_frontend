import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';

interface TransactionCardProps {
  title: string;
  category: string;
  mcc: string;
  amount: number;
  icon?: any; // можно заменить на ImageSourcePropType, если передаёшь локальные изображения
  style?: ViewStyle;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  category,
  mcc,
  amount,
  icon,
  style,
}) => {
  return (
    <View style={[styles.card, style]}>
      {/* Иконка */}
      <View style={styles.iconContainer}>
        {icon ? (
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        ) : (
          <Text style={styles.iconPlaceholder}>I</Text> // или можно заменить иконкой
        )}
      </View>

      {/* Инфо + сумма */}
      <View style={styles.textContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{category} • MCC {mcc}</Text>
        <Text style={styles.amount}>{amount.toLocaleString('ru-RU')} ₽</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 26,
    backgroundColor: '#EBEBEB',
    borderRadius: 24,
    gap: 16,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#232323',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  iconPlaceholder: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '600',
  },
  textContent: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
  },
  subtitle: {
    color: '#9B9B9B',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
    marginTop: 2,
    marginBottom: 8,
  },
  amount: {
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'SF Pro Display',
  },
});

export default TransactionCard;
