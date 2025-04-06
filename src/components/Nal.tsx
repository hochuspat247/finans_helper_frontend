import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const TaxDeductionSummary: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Фоновое изображение */}
      <Image
        source={require('@assets/icons/image 238.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <Text style={styles.headerText}>Налоговый вычет</Text>

      {/* Blur-блок 1 */}
      <BlurView intensity={16} tint="light" style={styles.blurBox1}>
        <View style={styles.mainSection}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="information-circle-outline" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.mainText}>Вы можете вернуть от государства</Text>
          <Text style={styles.amountText}>2 423 ₽</Text>
        </View>
      </BlurView>

      {/* Blur-блок 2 */}
      <BlurView intensity={16} tint="light" style={styles.blurBox2}>
        <Text style={styles.secondaryText}>В прошлом году вы потратили:</Text>
        <View style={styles.secondarySection}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="school-outline" size={20} color="#fff" />
          </TouchableOpacity>
          <View>
            <Text style={styles.secondaryAmountText}>26 423 ₽</Text>
            <Text style={styles.subText}>На обучение</Text>
          </View>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: 2,
    right: 0,
    top: "10%",
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 16,
    zIndex: 2,
  },
  blurBox1: {
    zIndex: 3,
    borderRadius: 30,
    marginBottom: 16,
    padding: 12,
    overflow: 'hidden',
  },
  blurBox2: {
    zIndex: 1,
    borderRadius: 30,
    marginBottom: 16,
    padding: 12,
    overflow: 'hidden',
  },
  mainSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  mainText: {
    fontSize: 14,
    color: '#fff',
    flex: 1,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  secondaryText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  secondarySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondaryAmountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default TaxDeductionSummary;
