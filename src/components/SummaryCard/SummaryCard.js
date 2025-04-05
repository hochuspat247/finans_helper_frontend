// components/SummaryCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SummaryCard = ({ type, amount }) => {
  const getTitle = () => {
    if (type === 'expenses') return 'Траты';
    if (type === 'income') return 'Доходы';
    return 'Сумма';
  };

  const getIcon = () => {
    switch (type) {
      case 'expenses':
        return require('@assets/icons/Frame 2085661275.png');
      case 'income':
        return require('@assets/icons/Frame 2085661275 (1).png');
      default:
        return require('@assets/icons/Frame 2085661275.png');
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Image source={getIcon()} style={styles.icon} />
        <Text style={styles.title}>{getTitle()}</Text>
      </View>
      <Text style={styles.amount}>
        {amount.toLocaleString('ru-RU')} ₽
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EBEBEB',
    borderRadius: 16,
    padding: 16,
    flex: 1,
    height: 110,
    justifyContent: 'space-between',
    shadowColor: '#000',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // работает в RN >= 0.71, иначе используй marginRight
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'SFPro',
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#232323',
    fontFamily: 'SFPro',
  },
});

export default SummaryCard;
