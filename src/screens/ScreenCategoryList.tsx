import CategoryGrid from '@components/CategoryGrid';
import FraudProtectionBanner from '@components/FraudProtectionBanner';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';


const ScreenCategoryList: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Баннер защиты */}
      <FraudProtectionBanner />

      {/* Сетка категорий */}
      <View style={styles.gridWrapper}>
        <CategoryGrid />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F6F6F9',
    justifyContent: "center",
    
  },
  gridWrapper: {
    marginTop: 24,
    justifyContent: "center",

  },
});

export default ScreenCategoryList;
