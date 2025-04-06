import ActionButtons from '@components/ActionButtons';
import InfoBlock from '@components/InfoBlock';
import TaxDeductionSummary from '@components/Nal';
import TransactionCard from '@components/TransactionCard';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';



const CategoryScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 1. Карточка транзакции */}
      <TransactionCard
        title="REG.RU"
        category="Связь"
        mcc="4814"
        amount={654220}
        icon={require('@assets/icons/solar_tag-horizontal-bold (2).png')} // замените на свою иконку
      />

      {/* 2. Кнопки "Скрыть / Не разделять" */}
      <ActionButtons />

      {/* 3. Информация о налоговом вычете */}
      <TaxDeductionSummary />

      {/* 4. Инфо блок */}
      <InfoBlock
        title="Реквизиты"
        subtitle="Идентификатор операции СБП"
        value="B5090004600367040000120011470502"
      />

      <InfoBlock
        title="Список покупок"
        value="Продление web хостинга"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24,
  },
});

export default CategoryScreen;
