import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DaySummary = ({ label = 'Сегодня', amount = 0 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.line} />
      <Text style={styles.text}>
        {amount.toLocaleString('ru-RU')} ₽
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    color: '#232323',
    fontFamily: 'SFPro',
  },
  line: {
    flex: 1,
    height: 1,
    marginTop: 3,
    backgroundColor: '#BDBDBD',
    marginHorizontal: 12,
  },
});

export default DaySummary;
