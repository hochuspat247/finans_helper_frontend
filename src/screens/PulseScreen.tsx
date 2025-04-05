import PulseHeader from '@components/PulseHeader/PulseHeader';
import TotalMoneyCard from '@components/TotalMoneyCard/TotalMoneyCard';
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';



interface Props {
  total: number;
}

const PulseScreen: React.FC<Props> = ({ total }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('@assets/icons/Frame 2087326610.png')} // ← сюда помести нужное фоновое изображение
        style={styles.background}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <PulseHeader />
          <TotalMoneyCard total={total} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    width,
    height,
  },
  overlay: {
    paddingTop: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 12,
    flex: 1,
    width: '100%',
  },
});

export default PulseScreen;
