// components/TransactionItem.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TransactionItem = ({ icon, category, description, amount }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Text style={styles.amount}>{amount.toLocaleString('ru-RU')} ₽</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#EDEDED',
    borderRadius: 28,
    padding: 12,
    marginVertical: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  textBlock: {
    flex: 1,
  },
  category: {
    fontSize: 13,
    fontWeight: '500',
    color: '#9B9B9B',
    fontFamily: 'SFPro',
  },
  description: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    fontFamily: 'SFPro',
  },
  amount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#232323',
    fontFamily: 'SFPro',
  },
});

export default TransactionItem;
