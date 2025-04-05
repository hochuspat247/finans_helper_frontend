import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InvestmentCardProps {
  label?: string;
  percentage: string; // например: "72,5%"
  change: string;     // например: "+0,10 (+0,13%)" 
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
  label = 'Инвестиции',
  percentage,
  change,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{label}</Text>

      <View style={styles.percentageRow}>
        <Text style={styles.arrow}>↑</Text>
        <Text style={styles.percentage}>{percentage}</Text>
      </View>

      <View style={styles.changeContainer}>
        <Text style={styles.changeText}>{change}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    color: '#979BA3',
    fontFamily: 'SF Pro Display',
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: undefined,
    marginBottom: 12,
  },
  percentageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
  },
  arrow: {
    fontSize: 32,
    color: '#000',
    fontWeight: '700',
  },
  percentage: {
    color: '#000',
    fontFamily: 'SF Pro Display',
    fontSize: 38,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: undefined,
  },
  changeContainer: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 500,
    backgroundColor: '#62DD7E',
  },
  changeText: {
    color: '#000',
    fontFamily: 'SF Pro Display',
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    textAlign: 'center',
  },
});

export default InvestmentCard;
