import PulseHeader from '@components/PulseHeader/PulseHeader';
import TotalMoneyCard from '@components/TotalMoneyCard/TotalMoneyCard';
import React from 'react';
import { View, StyleSheet } from 'react-native';


interface Props {
  total: number;
}

const PulseSummaryBlock: React.FC<Props> = ({ total }) => {
  return (
    <View style={styles.container}>
      <PulseHeader />
      <TotalMoneyCard total={total} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 12,
    gap: 12,
    flex: 1,
  },
});

export default PulseSummaryBlock;
