// src/screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Button from '@components/Button';
import { Colors } from '@constants/Colors';
import HeaderWithBack from '@components/HeaderWithBack/HeaderWithBack';
import TransactionItem from '@components/TransactionItem/TransactionItem';
import SummaryCard from '@components/SummaryCard/SummaryCard';
import PulseCard from '@components/PulseCard/PulseCard';
import DaySummary from '@components/DaySummary/DaySummary';
import FilterBar from '@components/FilterBar/FilterBar';
import TransactionList from '@components/TransactionList/TransactionList';

const WelcomeScreen = ({ navigation }: { navigation: any }) => {

  const transactions = [
    {
      type: 'переводМ',
      category: 'Переводы',
      description: 'Перевод между счетами',
      amount: 200,
    },
    {
      type: 'досуг',
      category: 'Досуг',
      description: 'Покупка билетов',
      amount: 3000,
    },
    {
      type: 'супермаркеты',
      category: 'Супермаркеты',
      description: 'Продукты',
      amount: 200,
    },
    {
      type: 'переводы',
      category: 'Переводы',
      description: 'Арина Ш.',
      amount: 60,
    },
  ];

  return (
    // <ImageBackground
    //   source={require('../../assets/images/welcome-bg.png')}
    //   style={styles.background}
    //   resizeMode="cover"
    // >
    //   <View style={styles.container}>
    //     <Text style={styles.title}>Добро пожаловать на платформу!</Text>

    //     <View style={styles.buttons}>
    //       <Button
    //         title="Регистрация"
    //         onPress={() => navigation.navigate('Register')}
    //         disabled={true}
    //       />
    //       <Button
    //         title="Войти"
    //         onPress={() => navigation.navigate('Login')}
    //       />
    //     </View>
    //   </View>
    // </ImageBackground>

    <View style={styles.container}>

      <PulseCard />
      <DaySummary label="Вчера" amount={2450} />
      <DaySummary label="Неделя" amount={15000} />

      <TransactionList transactions={transactions} />


      <FilterBar />






     
      {/* <HeaderWithBack title="Операции" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 53,
    paddingBottom: 53,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  buttons: {
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default WelcomeScreen;