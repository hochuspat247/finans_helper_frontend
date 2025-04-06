import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface EnoughForCardProps {
  months: number;
  spending: number;
}

const EnoughForCard: React.FC<EnoughForCardProps> = ({
  months,
  spending,
}) => {
  return (
    <View style={styles.card}>
      {/* Верхняя строка */}
      <View style={styles.rowBetween}>
        <View style={styles.row}>
          <Text style={styles.label}>Хватит на</Text>
          <View style={styles.monthBadge}>
            <Text style={styles.monthText}>{months} месяца</Text>
          </View>
        </View>
        <TouchableOpacity >
          <Image
            source={require('@assets/icons/gg_info (1).png')}
            style={styles.infoIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Подпись */}
      <Text style={styles.subtext}>столько вы тратите в месяц</Text>

      {/* Сумма и кнопка */}
      <View style={styles.rowBetween}>
        <Text style={styles.amount}>
          {spending.toLocaleString('ru-RU')} ₽
        </Text>
        <View style={styles.statusButton}>
          <Text style={styles.statusText}>Хорошо</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#232323',
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#FFF',
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '600',
  },
  monthBadge: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  monthText: {
    color: '#232323',
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '600',
  },
  infoIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFF',
  },
  subtext: {
    color: '#9B9B9B',
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '400',
  },
  amount: {
    color: '#FFF',
    fontFamily: 'SF Pro Display',
    fontSize: 24,
    fontWeight: '700',
  },
  statusButton: {
    backgroundColor: '#5FE274',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  statusText: {
    color: '#232323',
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default EnoughForCard;
