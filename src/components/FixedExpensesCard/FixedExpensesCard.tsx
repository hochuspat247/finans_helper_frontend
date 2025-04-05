import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface FixedExpensesCardProps {
  amount: number;
  categoryCount?: number;
}

const FixedExpensesCard: React.FC<FixedExpensesCardProps> = ({
  amount,
  categoryCount = 10,
}) => {
  return (
    <View style={styles.container}>
      {/* Левая часть */}
      <View style={styles.leftBlock}>
        <Text style={styles.title}>Постоянные расходы</Text>
        <View style={styles.categoryRow}>
          <Image
            source={require('@assets/icons/image (1).png')} // замени на свои иконки
            style={styles.icon}
          />
          <Image
            source={require('@assets/icons/image (2).png')}
            style={styles.icon}
          />
          <Text style={styles.categoryText}>{categoryCount} категорий</Text>
        </View>
      </View>

      {/* Правая часть */}
      <Text style={styles.amount}>{amount.toLocaleString('ru-RU')} ₽</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftBlock: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  categoryText: {
    color: '#979BA3',
    fontFamily: 'SF Pro Display',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  amount: {
    color: '#000',
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
});

export default FixedExpensesCard;
