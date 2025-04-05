// src/screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Button from '@components/Button';
import { Colors } from '@constants/Colors';
import HeaderWithBack from '@components/HeaderWithBack/HeaderWithBack';
import SummaryCard from '@components/SummaryCard/SummaryCard';
import PulseCard from '@components/PulseCard/PulseCard';
import DaySummary from '@components/DaySummary/DaySummary';

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
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
      <DaySummary amount={3460} />



     
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